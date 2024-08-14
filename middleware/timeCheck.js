module.exports = (req, res, next) => {
    const dayOfWeek = new Date().getDay(); // 0-6 (Sunday-Saturday)
    const hour = new Date().getHours();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 8 && hour <= 17) {
      next(); // Allow the request to proceed
    } else {
      res.status(403).send('Website is unavailable outside working hours.');
    }
  };