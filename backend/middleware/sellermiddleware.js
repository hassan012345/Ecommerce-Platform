const authenticate = (req, res, next) => {
    if (!req.session.sellerId) {
        return res.status(403).json({ message: 'Authentication required' });
    }

    next();
};

export default authenticate;