// Video Data with Categories
const videos = [
  {
    title: "Sample Video Title",
    channel: "Channel Name",
    views: "1M views",
    time: "1 week ago",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    category: "Movies"
  },
  {
    title: "Another Gaming Video",
    channel: "GamerX",
    views: "500K views",
    time: "2 weeks ago",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    category: "Gaming"
  },
  {
    title: "Cool Music Video",
    channel: "Music World",
    views: "2M views",
    time: "3 days ago",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    category: "Music"
  },
  {
    title: "Latest News Update",
    channel: "News 24",
    views: "200K views",
    time: "5 hours ago",
    thumbnail: "https://img.youtube.com/vi/IcrbM1l_BoI/hqdefault.jpg",
    category: "News"
  },
  {
    title: "Sports Highlights",
    channel: "SportsZone",
    views: "800K views",
    time: "1 day ago",
    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
    category: "Sports"
  }
];

// Render Videos Function
function renderVideos(filter = "All") {
  const videoContainer = document.querySelector(".videos");
  videoContainer.innerHTML = ""; // clear old videos
  videos
    .filter(v => filter === "All" || v.category === filter)
    .forEach(v => {
      videoContainer.innerHTML += `
        <div class="video-card">
          <div class="thumbnail"><img src="${v.thumbnail}" alt=""></div>
          <div class="video-info">
            <div class="channel-icon"></div>
            <div class="video-details">
              <p class="video-title">${v.title}</p>
              <p class="video-meta">${v.channel} • ${v.views} • ${v.time}</p>
            </div>
          </div>
        </div>`;
    });
}

// Initial Load
renderVideos();

// Category Button Clicks
document.querySelectorAll(".categories button").forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons
    document.querySelectorAll(".categories button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Render based on category
    renderVideos(btn.innerText);
  });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Search Functionality
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const videoContainer = document.querySelector(".videos");
  videoContainer.innerHTML = "";
  videos
    .filter(v => v.title.toLowerCase().includes(query) || v.channel.toLowerCase().includes(query))
    .forEach(v => {
      videoContainer.innerHTML += `
        <div class="video-card">
          <div class="thumbnail"><img src="${v.thumbnail}" alt=""></div>
          <div class="video-info">
            <div class="channel-icon"></div>
            <div class="video-details">
              <p class="video-title">${v.title}</p>
              <p class="video-meta">${v.channel} • ${v.views} • ${v.time}</p>
            </div>
          </div>
        </div>`;
    });
});
