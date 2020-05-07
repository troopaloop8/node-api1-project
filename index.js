const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

let users = [];

// | POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |

server.post('/api/users', (req, res) => {
    const user = req.body;
    user.id = shortid.generate();
    users.push(user);
    res.status(200).json(users);
})

// | GET    | /api/users     | Returns an array users.                                                                                |

server.get('/api/users', (req, res) => {
    res.status(200).json(users);
})

// | GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const idIndex = users.findIndex((user) => user.id === id)
    res.status(200).json(users[idIndex])
})


// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const found = users.filter(user => user.id === id)
    if (found) {
        users = users.filter(user => user.id !== id);
        res.status(200).json(found);
    } else {
        res.status(404).json({ message: "user not found"})
    }
})


// | PATCH  | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |

server.patch('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    let index = hubs
})



//// SERVER PORT

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})