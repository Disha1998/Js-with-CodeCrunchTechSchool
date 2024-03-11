

function FollowUnfollow(userId) {
    let id = document.getElementById(userId)
    let btn = id.querySelector('button')

    if (btn.innerText === 'Follow') {
        btn.innerText = "Unfollow"
        // btn.style.backgroundColor = "#E0245E"
        btn.classList.add('unfollow')
    } else {
        btn.innerText = "Follow"
        // btn.style.backgroundColor = "#0d8cd9"
        btn.classList.remove('unfollow')
    }
}


function InstaLikebtn() {
    let image = document.querySelector('img')
    let like = document.querySelector('i')

    image.addEventListener('dblclick', function () {

        like.style.transform = "translate(-40%, -48%) scale(2)"
        like.style.opacity = "0.8"

        setTimeout(() => {
        like.style.transform = "translate(-40%, -48%) scale(0)"
        like.style.opacity = "0"
            
        }, 2000);

    })
}