// Lấy phần tử thanh tìm kiếm
const searchInput = document.getElementById('searchText');

// Lấy phần tử chứa các phần mềm trong Gaming Library
const gamingLibraryItems = document.querySelectorAll('.gaming-library .item');

// Thêm sự kiện khi người dùng nhập vào thanh tìm kiếm
searchInput.addEventListener('keyup', () => {
    const keyword = searchInput.value.toLowerCase(); // Lấy từ khóa và chuyển thành chữ thường

    // Duyệt qua từng phần mềm trong thư viện game
    gamingLibraryItems.forEach(item => {
        const gameName = item.querySelector('h4').textContent.toLowerCase(); // Lấy tên game và chuyển thành chữ thường


        // Kiểm tra xem tên game có chứa từ khóa hay không
        if (gameName.includes(keyword)) {
            item.style.display = 'block'; // Hiển thị phần mềm nếu có chứa từ khóa
        } else {
            item.style.display = 'none'; // Ẩn phần mềm nếu không chứa từ khóa
        }
    });
});