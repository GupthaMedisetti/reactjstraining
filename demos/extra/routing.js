var { browserHistory, Router, Route, IndexRoute, Link } = ReactRouter;

const API = 'https://addressbook-api.herokuapp.com/contacts'

let _contacts = {}
let _initCalled = false
let _changeListeners = []

const ContactStore = {

  init: function () {
    if (_initCalled)
      return

    _initCalled = true

    getJSON(API, function (err, res) {
      res.contacts.forEach(function (contact) {
        _contacts[contact.id] = contact
      })

      ContactStore.notifyChange()
    })
  },

  addContact: function (contact, cb) {
    postJSON(API, { contact: contact }, function (res) {
      _contacts[res.contact.id] = res.contact
      ContactStore.notifyChange()
      if (cb) cb(res.contact)
    })
  },

  removeContact: function (id, cb) {
    deleteJSON(API + '/' + id, cb)
    delete _contacts[id]
    ContactStore.notifyChange()
  },

  getContacts: function () {
    const array = []

    for (const id in _contacts)
      array.push(_contacts[id])

    return array
  },

  getContact: function (id) {
    return _contacts[id]
  },

  notifyChange: function () {
    _changeListeners.forEach(function (listener) {
      listener()
    })
  },

  addChangeListener: function (listener) {
    _changeListeners.push(listener)
  },

  removeChangeListener: function (listener) {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l
    })
  }

}

localStorage.token = localStorage.token || (Date.now()*Math.random())

function getJSON(url, cb) {
  const req = new XMLHttpRequest()
  req.onload = function () {
    if (req.status === 404) {
      cb(new Error('not found'))
    } else {
      cb(null, JSON.parse(req.response))
    }
  }
  req.open('GET', url)
  req.setRequestHeader('authorization', localStorage.token)
  req.send()
}

function postJSON(url, obj, cb) {
  const req = new XMLHttpRequest()
  req.onload = function () {
    cb(JSON.parse(req.response))
  }
  req.open('POST', url)
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  req.setRequestHeader('authorization', localStorage.token)
  req.send(JSON.stringify(obj))
}

function deleteJSON(url, cb) {
  const req = new XMLHttpRequest()
  req.onload = cb
  req.open('DELETE', url)
  req.setRequestHeader('authorization', localStorage.token)
  req.send()
}



const App = React.createClass({
  contextTypes : {
    router: React.PropTypes.object,    
    history: React.PropTypes.object,
    location: React.PropTypes.object
  }, 
  componentDidMount() {
    console.log(this.context.router);

    console.log(this.context.history, this.context.location)
  },
  
  getInitialState() {
    return {
      contacts: ContactStore.getContacts(),
      loading: true
    }
  },

  componentWillMount() {
    ContactStore.init()
  },

  componentDidMount() {
    ContactStore.addChangeListener(this.updateContacts)
  },

  componentWillUnmount() {
    ContactStore.removeChangeListener(this.updateContacts)
  },

  updateContacts() {
    if (!this.isMounted())
      return

    this.setState({
      contacts: ContactStore.getContacts(),
      loading: false
    })
  },

  render() {
    const contacts = this.state.contacts.map(function (contact) {
      return <li key={contact.id}><Link to={`/contact/${contact.id}`}>{contact.first}</Link></li>
    })

    return (
      <div className="App">
        <div className="ContactList">
          <Link to="/contact/new">New Contact</Link>
          <ul>
            {contacts}
          </ul>
        </div>
        <div className="Content">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const Index = React.createClass({
  render() {
    return <h1>Address Book</h1>
  }
})

const Contact = React.createClass({
  contextTypes : {
    router: React.PropTypes.object,    
    history: React.PropTypes.object,
    location: React.PropTypes.object
  }, 
  getStateFromStore(props) {
    const { id } = props ? props.params : this.props.params

    return {
      contact: ContactStore.getContact(id)
    }
  },

  getInitialState() {
    return this.getStateFromStore()
  },

  componentDidMount() {
    ContactStore.addChangeListener(this.updateContact)
  },

  componentWillUnmount() {
    ContactStore.removeChangeListener(this.updateContact)
  },

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromStore(nextProps))
  },

  updateContact() {
    if (!this.isMounted())
      return

    this.setState(this.getStateFromStore())
  },

  destroy() {
    const { id } = this.props.params
    ContactStore.removeContact(id)
    this.context.history.push('/')
  },

  render() {
    const contact = this.state.contact || {}
    const name = contact.first + ' ' + contact.last
    const avatar = contact.avatar || 'http://placecage.com/50/50'

    return (
      <div className="Contact">
        <img height="50" src={avatar} key={avatar} />
        <h3>{name}</h3>
        <button onClick={this.destroy}>Delete</button>
      </div>
    )
  }
})

const NewContact = React.createClass({

  createContact(event) {
    event.preventDefault()

    ContactStore.addContact({
      first: ReactDOM.findDOMNode(this.refs.first).value,
      last: ReactDOM.findDOMNode(this.refs.last).value
    }, (contact) => {
      this.props.router.push(`/contact/${contact.id}`)
    })
  },

  render() {
    return (
      <form onSubmit={this.createContact}>
        <p>
          <input type="text" ref="first" placeholder="First name" />
          <input type="text" ref="last" placeholder="Last name" />
        </p>
        <p>
          <button type="submit">Save</button> <Link to="/">Cancel</Link>
        </p>
      </form>
    )
  }
})

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="contact/new" component={NewContact} />
      <Route path="contact/:id" component={Contact} />
      <Route path="*" component={Index} />
    </Route>
  </Router>
), document.getElementById('example'))
