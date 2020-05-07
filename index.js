const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

let users = [];

// | POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |

server.post("/api/users", (req, res) => {
    const user = req.body;
    if (!user.name || !user.bio) {
      res
        .status(400)
        .json({ errorMessage: "Please provide name and bio for the user." });
    }
    user.id = shortid.generate();
    users.push(user);
    if (!users.find((newUser) => newUser.id === user.id)) {
      res.status(500).json({
        errorMessage: "There was an error while saving the user to the database",
      });
    }
    res.status(201).json({ message: `successfully posted user ${user.name}` });
  });



// | GET    | /api/users     | Returns an array users.                                                                                |

server.get('/api/users', (req, res) => {
    if (users.length > 0) {
        res.status(200).json(users);
    } else if (users.length === 0) {
        res.status(501).json({errorMessage: "There are no users to be retrieved"})
    } else {
        res.status(500).json({errorMessage: "The user info could not be retrieved"})
    }
});

// | GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const idIndex = users.findIndex((user) => user.id === id);
    if (idIndex === -1) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
      if (!users[idIndex]) {
        res
          .status(500)
          .json({ message: "The user information could not be retrieved." });
      }  
    res.status(200).json(users[idIndex]);
})


// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const found = users.filter(user => user.id === id)
    
    if (!found) {
        res.status(404).json({ message: "user not found"})
    } else if (found) {
        users = users.filter(user => user.id !== id);
        res.status(200).json(found);
    } else  {
        res.status(500).json({ errorMessage: "The user could not be removed"})
    }
})


// | PATCH  | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |

server.patch('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const idIndex = users.findIndex((user) => user.id === id);
    changes.id = users[idIndex].id;
    users[idIndex] = changes
    
    if (idIndex === -1) {
        res.status(404).json({errorMessage: "The user with the specified ID does not exist"})
    }  
    
    if (!changes.name || !changes.bio) {
        res
          .status(400)
          .json({ errorMessage: "Please provide name and bio for the user." });
    }

    if(users[idIndex] === changes) {
        res.status(200).json(users)
    } else {
        res.status(500).json({ errorMessage: "The user information could not be modified!"})
    }


    


})



//// SERVER PORT

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})