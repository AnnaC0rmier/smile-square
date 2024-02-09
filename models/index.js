const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, { 
    foreignKey: 'authorId',
    onDelete: 'SET NULL'
});

BlogPost.belongsTo(User, { 
    foreignKey: 'authorId',
    onDelete: 'SET NULL'
}); 

BlogPost.hasMany(Comment, { 
    foreignKey: 'blogPostId', 
    onDelete: 'SET NULL'
}); 

Comment.belongsTo(BlogPost, { 
    foreignKey: 'blogPostId',
    onDelete: 'SET NULL'
});

module.exports = {User, BlogPost, Comment};

