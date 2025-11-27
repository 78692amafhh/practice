const reels = [
  {
    bio: 'Frontend developer • loves CSS',
    isFollowing: false,
    isliked: false,
    followersCount: 1200,
    followingCount: 320,

    videoUrl: '1.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'A quick CSS trick #css #frontend',
    tags: ['css','frontend','trick'],
    createdAt: '2025-11-20T09:20:00Z',

    likesCount: 450,
    dislikesCount: 2,
    shareCount: 2,
    commentsCount: 18,
    isLikedByUser: false,
    isDislikedByUser: false,
  },

  {
    bio: 'Travel vlogs & tips',
    isFollowing: true,
    isliked: true,
    followersCount: 34000,
    followingCount: 410,

    videoUrl: '1.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Sunrise at the valley ',
    tags: ['travel','sunrise'],
    createdAt: '2025-11-18T05:15:00Z',

    likesCount: 15200,
    dislikesCount: 30,
    shareCount: 7,
    commentsCount: 420,
    isLikedByUser: true,
    isDislikedByUser: false,
  },

  {
    bio: 'Home recipes • quick & tasty',
    isFollowing: false,
    isliked: false,
    followersCount: 8200,
    followingCount: 98,

    videoUrl: '1.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Decent paneer tikka in 10 minutes ',
    tags: ['food','recipe','quick'],
    createdAt: '2025-11-10T12:30:00Z',

    likesCount: 980,
    dislikesCount: 5,
    shareCount: 3,
    commentsCount: 40,
    isLikedByUser: false,
    isDislikedByUser: false,
  },

  {
    bio: 'UI experiments & freebies',
    isFollowing: true,
    isliked: true,
    followersCount: 54000,
    followingCount: 200,

    videoUrl: '1.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Microinteraction ideas for buttons 🔁',
    tags: ['ui','ux','microinteractions'],
    createdAt: '2025-10-30T15:45:00Z',

    likesCount: 23000,
    dislikesCount: 12,
    shareCount: 5,
    commentsCount: 150,
    isLikedByUser: true,
    isDislikedByUser: false,
  },

  {
    bio: 'Home workouts • nutrition tips',
    isFollowing: false,
    isliked: false,
    followersCount: 900,
    followingCount: 120,

    videoUrl: '1.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: '5-minute core routine ',
    tags: ['fitness','workout','core'],
    createdAt: '2025-11-22T07:00:00Z',

    likesCount: 310,
    dislikesCount: 1,
    shareCount: 11,
    commentsCount: 9,
    isLikedByUser: false,
    isDislikedByUser: false,
  }
];

let allReals = document.querySelector(".reels");

let items = '';

let newdata = ()=>{
  
reels.forEach( (elem, indexId)=>{
       items  += `<div class="reel">
        <video muted autoplay loop src="${elem.videoUrl}"></video>
        <div class="bottom">
            <div class="childTop">
                <h2><img src="${elem.thumbnailUrl}" alt="" class="profilicons"> ${elem.caption}</h2>
                <button class="${elem.isFollowing ? "Following" : "Follow" }">${elem.isFollowing ? "Following" : "Follow" }</button>
            </div>
            <div class="info">
            <h3>${elem.bio}</h3>
            </div>
        </div>
        <div class="right">
            <div id="${indexId}" class="likesCount flexC">
                <h4 class="likeIcon"><i class="ri-thumb-up-line"></i></h4>
                <div class="likeCount">${elem.likesCount}</div>
            </div>            
            <div id="${indexId}" class="dislikesCount flexC">
                <h4 class="disLikeIcon"><i class="ri-thumb-down-line"></i></h4>
                <div class="disLcount">${elem.dislikesCount}</div>
            </div>
            <div id="${indexId}" class="commentsCount flexC">
                <h4 class="commntIcon"><i class="ri-chat-1-line"></i></h4>
                <div class="commntCount">${elem.commentsCount}</div>
            </div>
            <div id="${indexId}" class="shareWrp flexC">
                <h4 class="shareIcon"><i class="ri-share-forward-line"></i></h4>
                <div class="shareCount">${elem.shareCount}</div>
            </div>
            <div id="${indexId}" class="menu">
                <h4 class="menuIcon"><i class="ri-more-2-fill"></i></h4>
            </div>
        </div>
    </div>`
    }
);

allReals.innerHTML = items;

}

newdata();




allReals.addEventListener('click', 
  (dets)=>{


    
    reels[dets.target.id].likesCount++;
newdata();
  }
)




