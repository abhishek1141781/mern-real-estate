# 1. Cannot set headers after they are sent to the client
    The error message "Cannot set headers after they are sent to the client" occurs when you try to add a header to an HTTP response that has already been sent to the client.

    res.sendStatus(201).json("User created !!!"): WRONG
        instead of
    res.status(201).json("User created !!!"): RIGHT
    
# 2.






