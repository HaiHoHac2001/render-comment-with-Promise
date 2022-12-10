var users = [
    {
        id: 1,
        name: 'Hồ Hắc Hải'
    },
    {
        id: 2,
        name: 'Đặng Ngọc Sơn'
    },
    {
        id: 3,
        name: 'Nguyễn Ngọc Thịnh'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        comment: 'こんにちは！'

    },
    {
        id: 2,
        user_id: 2,
        comment: 'Hi Bro'

    },
    {
        id: 3,
        user_id: 1,
        comment: 'Chúc anh sức khỏe ^^'

    },
]

function getComment(){
    return new Promise(resolve => {
        setTimeout(resolve(comments),2000)
    })
}

function getUsersById(userIds) {
    var user = users.filter(user => {
        return userIds.includes(user.id)
    })
    return user
}

getComment()
    .then(comments => {
        var userIds = comments.map(comment => {
            return comment.user_id
        })
        
        return {
            users: getUsersById(userIds),
            comments: comments
        }
        
    })
    .then(data => {
        var boxComment = document.querySelector('#cmt-block')
        var html = ''
        data.comments.forEach(comment =>{
            var user = data.users.find(item => {
                return comment.user_id === item.id 
            })
            html += `<li>${user.name}: ${comment.comment}</li>`
            
        })
        boxComment.innerHTML = html
        console.log(html)
    })