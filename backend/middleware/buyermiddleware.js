// Import any required dependencies
// ...

// Define the middleware function
const authenticateBuyer = (req, res, next) => {
    // Check if the user is authenticated
    if (req.session.userId) {
        // User is authenticated, proceed to the next middleware or route handler
        next();
    } else {
        // User is not authenticated, return an error response
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// Export the middleware function
export default authenticateBuyer;