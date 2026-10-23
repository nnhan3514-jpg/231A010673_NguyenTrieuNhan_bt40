// Dữ liệu 20 bộ phim
const moviesData = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        genre: "Khoa học viễn tưởng",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        description: "Một tên trộm đánh cắp thông tin bí mật thông qua công nghệ chia sẻ giấc ngủ được giao nhiệm vụ cấy ý tưởng vào tâm trí CEO.",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page"
    },
    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        genre: "Khoa học viễn tưởng",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        description: "Nhóm nhà du hành vũ trụ vượt qua lỗ sâu để tìm kiếm một hành tinh có thể duy trì sự sống cho nhân loại khi Trái Đất cạn kiệt tài nguyên.",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Hành động",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        description: "Batman phải đối mặt với kẻ thù nguy hiểm nhất mang tên Joker - kẻ muốn gieo rắc hỗn loạn tại thành phố Gotham.",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart"
    },
    {
        id: 4,
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        genre: "Hoạt hình",
        poster: "https://www.sonypictures.ca/sites/canada/files/2023-08/DP_7175931_SPIDER-MANACROSSTHESPIDER-VERSE_2000x3000_HEDkRedShadowKeyArt%20(1)-min-min.jpg",
        description: "Miles Morales du hành qua các vũ trụ song song và chạm trán với hội Người Nhện từ các chiều không gian khác nhau.",
        director: "Joaquim Dos Santos, Kemp Powers",
        cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac"
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Tâm lý",
        poster: "https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        description: "Câu chuyện cảm động về tình bạn và hy vọng giữa hai tù nhân tại nhà tù Shawshank đầy khắc nghiệt.",
        director: "Frank Darabont",
        cast: "Tim Robbins, Morgan Freeman"
    },
    {
        id: 6,
        title: "Parasite",
        year: 2019,
        genre: "Tâm lý",
        poster: "https://tse3.mm.bing.net/th/id/OIP.ltqtxgMmvu6dE8lHKjKXXQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Gia đình nghèo khó lập mưu thâm nhập vào cuộc sống xa hoa của một gia đình giàu có, dẫn đến những hệ lụy bất ngờ.",
        director: "Bong Joon Ho",
        cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong"
    },
    {
        id: 7,
        title: "Top Gun: Maverick",
        year: 2022,
        genre: "Hành động",
        poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
        description: "Phi công huyền thoại Pete 'Maverick' Mitchell trở lại huấn luyện một nhóm phi công trẻ cho nhiệm vụ đặc biệt.",
        director: "Joseph Kosinski",
        cast: "Tom Cruise, Miles Teller, Jennifer Connelly"
    },
    {
        id: 8,
        title: "Avatar: The Way of Water",
        year: 2022,
        genre: "Khoa học viễn tưởng",
        poster: "https://m.media-amazon.com/images/M/MV5BMWNlMWQyMTQtZjc5MC00NTljLTgxZTctZDZiZTBmODY5MTkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Jake Sully cùng gia đình tìm kiếm nơi ẩn náu tại các vùng biển của Pandora và đối mặt với mối đe dọa cũ quay trở lại.",
        director: "James Cameron",
        cast: "Sam Worthington, Zoe Saldaña, Sigourney Weaver"
    },
    {
        id: 9,
        title: "Your Name",
        year: 2016,
        genre: "Hoạt hình",
        poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/your-name-2016.jpg",
        description: "Hai học sinh trung học kỳ lạ hoán đổi cơ thể cho nhau qua những giấc mơ và bắt đầu cuộc hành trình tìm kiếm đối phương.",
        director: "Makoto Shinkai",
        cast: "Ryunosuke Kamiki, Mone Kamishiraishi"
    },
    {
        id: 10,
        title: "Gladiator",
        year: 2000,
        genre: "Hành động",
        poster: "https://m.media-amazon.com/images/M/MV5BMjgyMDM1MGQtMjNmMy00ZTExLWJhMmQtNDMxMTVmMzEyZDk0XkEyXkFqcGc@._V1_.jpg",
        description: "Một vị tướng La Mã bị phản bội, gia đình sát hại nay trở lại đấu trường dưới danh nghĩa đấu sĩ để trả thù.",
        director: "Ridley Scott",
        cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen"
    },
    {
        id: 11,
        title: "The Conjuring",
        year: 2013,
        genre: "Kinh dị",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
        description: "Cặp vợ chồng chuyên gia siêu nhiên Ed và Lorraine Warren đến giúp đỡ một gia đình bị thế lực hắc ám quấy phá tại nông trại.",
        director: "James Wan",
        cast: "Vera Farmiga, Patrick Wilson, Lili Taylor"
    },
    {
        id: 12,
        title: "Coco",
        year: 2017,
        genre: "Hoạt hình",
        poster: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
        description: "Cậu bé Miguel vô tình lạc vào Vùng Đất Người Chết và khám phá ra bí mật gia đình liên quan đến âm nhạc.",
        director: "Lee Unkrich, Adrian Molina",
        cast: "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt"
    },
    {
        id: 13,
        title: "Joker",
        year: 2019,
        genre: "Tâm lý",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        description: "Hành trình trượt dài vào tội ác và sự tha hóa của một diễn viên hài thất bại Arthur Fleck tại thành phố Gotham.",
        director: "Todd Phillips",
        cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz"
    },
    {
        id: 14,
        title: "Mad Max: Fury Road",
        year: 2015,
        genre: "Hành động",
        poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/mad-max-fury-road-poster.jpeg",
        description: "Trong một thế giới hậu tận thế khô cằn, Max cùng Furiosa hợp sức chạy trốn khỏi bạo chúa Immortan Joe trên chiếc xe chiến.",
        director: "George Miller",
        cast: "Tom Hardy, Charlize Theron, Nicholas Hoult"
    },
    {
        id: 15,
        title: "Spirited Away",
        year: 2001,
        genre: "Hoạt hình",
        poster: "https://www.deepfocusreview.com/wp-content/uploads/2024/07/Spirited-Away-2001-scaled.jpg",
        description: "Cô bé Chihiro lạc vào một thế giới kỳ bí của các linh hồn sau khi cha mẹ bị biến thành heo và phải tìm cách giải cứu họ.",
        director: "Hayao Miyazaki",
        cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki"
    },
    {
        id: 16,
        title: "Attack on Titan: The Last Attack",
        year: 2024,
        genre: "Hoạt hình",
        poster: "https://images.justwatch.com/poster/323086210/s718/attack-on-titan-the-last-attack.jpg",
        description: "Cuộc chiến cuối cùng định đoạt số phận nhân loại khi Eren Jaeger tiến hành Rung Chấn để tiêu diệt thế giới bên ngoài bức tường.",
        director: "Yuichiro Hayashi",
        cast: "Yuki Kaji, Yui Ishikawa, Marina Inoue"
    },
    {
        id: 17,
        title: "Doraemon: Nobita và lâu dài dưới đáy biển",
        year: 2026,
        genre: "Hoạt hình",
        poster: "https://tse2.mm.bing.net/th/id/OIP.zballnkICOR_FiDmLFCU1gHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Chú mèo máy thông minh đến từ tương lai cùng những món bảo bối kỳ diệu đồng hành trong các chuyến phiêu lưu của Nobita và nhóm bạn.",
        director: "Fujiko F. Fujio",
        cast: "Wasabi Mizuta, Megumi Ohara"
    },
    {
        id: 18,
        title: "Thám tử lừng danh Conan: Thiên thần sa ngã trên xa lộ",
        year: 2026,
        genre: "Hoạt hình",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/dtnpEB86r0IQfQVlOTFMJbbxUV0.jpg",
        description: "Một vụ án mạng ly kỳ trên đường cao tốc kéo Conan và các đồng đội vào vòng xoáy đối đầu căng thẳng với Tổ chức Áo Đen.",
        director: "Gosho Aoyama",
        cast: "Minami Takayama, Wakana Yamazaki, Rikiya Koyama"
    },
    {
        id: 19,
        title: "Zootopia 2",
        year: 2025,
        genre: "Hoạt hình",
        poster: "https://image.tmdb.org/t/p/original/oAfIIrBDF5XGvyMRqS310YAt0dV.jpg",
        description: "Cảnh sát thỏ Judy Hopps và chú cáo Nick Wilde tái hợp trong một cuộc điều tra vụ án hoàn toàn mới đầy kỳ thú tại thành phố loài thú Zootopia.",
        director: "Jared Bush",
        cast: "Ginnifer Goodwin, Jason Bateman"
    },
    {
        id: 20,
        title: "Thám tử lừng danh Conan: Ngôi sao 5 cánh 1 triệu đô",
        year: 2024,
        genre: "Hoạt hình",
        poster: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/the_milliondollar_pentagram.png",
        description: "Kaito Kid nhắm đến một thanh kiếm báu liên quan đến gia tộc Hijikata tại Hakodate, cuốn Conan và Heiji vào cuộc chiến kho báu đầy bất ngờ.",
        director: "Tomoka Nagaoka",
        cast: "Minami Takayama, Kappei Yamaguchi, Rikiya Koyama"
    }
];

// DOM Elements
const movieGrid = document.getElementById('movie-grid');
const searchInput = document.getElementById('search-input');
const genreFiltersContainer = document.getElementById('genre-filters');
const resultCount = document.getElementById('result-count');
const themeToggleBtn = document.getElementById('theme-toggle');
const modal = document.getElementById('movie-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// Khởi tạo ứng dụng khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderGenreCheckboxes();
    renderMovies(moviesData);
    setupEventListeners();
});

// --- Quản lý Light/Dark Mode (Bài 3.2) ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// --- Bài 2.1: Hiển thị danh sách phim ---
function renderMovies(movies) {
    movieGrid.innerHTML = '';
    resultCount.textContent = `Hiển thị ${movies.length} phim`;

    if (movies.length === 0) {
        movieGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Không tìm thấy bộ phim phù hợp.</p>`;
        return;
    }

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
            <div class="movie-info">
                <span class="movie-genre-tag">${movie.genre}</span>
                <h3 class="movie-title" title="${movie.title}">${movie.title}</h3>
                <div class="movie-meta">
                    <span>Năm: ${movie.year}</span>
                    <i class="fa-solid fa-circle-info" style="color: var(--primary-color);"></i>
                </div>
            </div>
        `;
        
        // Sự kiện click mở Modal (Bài 3.1)
        card.addEventListener('click', () => openMovieModal(movie));
        movieGrid.appendChild(card);
    });
}

// --- Bài 2.2: Tự động phát hiện và tạo Checkbox Thể loại ---
function renderGenreCheckboxes() {
    const genres = [...new Set(moviesData.map(movie => movie.genre))];
    
    genreFiltersContainer.innerHTML = '';
    genres.forEach(genre => {
        const label = document.createElement('label');
        label.className = 'checkbox-item';
        label.innerHTML = `
            <input type="checkbox" value="${genre}" class="genre-checkbox">
            <span>${genre}</span>
        `;
        genreFiltersContainer.appendChild(label);
    });
}

// --- Bài 2.4 & 2.5: Bộ lọc tích hợp và Debounce cho tìm kiếm ---
function setupEventListeners() {
    const checkboxes = genreFiltersContainer.querySelectorAll('.genre-checkbox');

    // Lắng nghe sự kiện thay đổi checkbox thể loại
    checkboxes.forEach(cb => {
        cb.addEventListener('change', filterMovies);
    });

    // Áp dụng kỹ thuật Debounce (350ms) cho ô tìm kiếm (Bài 2.5)
    searchInput.addEventListener('input', debounce(filterMovies, 350));
}

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Hàm lọc đồng thời Thể loại & Từ khóa tên phim
function filterMovies() {
    const keyword = searchInput.value.trim().toLowerCase();
    
    // Lấy danh sách các thể loại đang được chọn
    const selectedGenres = Array.from(
        genreFiltersContainer.querySelectorAll('.genre-checkbox:checked')
    ).map(cb => cb.value);

    const filtered = moviesData.filter(movie => {
        // Điều kiện khớp tên phim
        const matchTitle = movie.title.toLowerCase().includes(keyword);
        
        // Điều kiện khớp thể loại (nếu không chọn thể loại nào thì hiển thị tất cả)
        const matchGenre = selectedGenres.length === 0 || selectedGenres.includes(movie.genre);

        return matchTitle && matchGenre;
    });

    renderMovies(filtered);
}

// --- Bài 3.1: Modal Chi tiết Phim ---
function openMovieModal(movie) {
    modalBody.innerHTML = `
        <div class="modal-detail-grid">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="modal-info-text">
                <h2>${movie.title} (${movie.year})</h2>
                <p><strong>Thể loại:</strong> <span style="color: var(--primary-color);">${movie.genre}</span></p>
                <p><strong>Đạo diễn:</strong> ${movie.director}</p>
                <p><strong>Diễn viên:</strong> ${movie.cast}</p>
                <p><strong>Mô tả:</strong> ${movie.description}</p>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});