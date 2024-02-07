const User = require('./models/User');
const BlogPost = require('./models/BlogPost');
const Comment = require('./models/Comment');


User.hasMany(BlogPost, { 
    foreignKey: 'authorId',
    onDelete: 'SET NULL'
});

BlogPost.belongsTo(User, { 
    foreignKey: 'authorId',
    onDelete: 'SET NULL'
}); 

BlogPost.hasMany(Comment, { 
    foreignKey: 'postId',
    onDelete: 'SET NULL'
}); 

Comment.belongsTo(BlogPost, { 
    foreignKey: 'postId',
    onDelete: 'SET NULL'
});

module.exports = {User, BlogPost, Comment};
