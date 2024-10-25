document.addEventListener('DOMContentLoaded', function () {
    const categoryToggle = document.getElementById('categoryToggle');
    const categoriesList = document.getElementById('categoriesList');

    if (categoryToggle) {
        categoryToggle.addEventListener('click', function (event) {
            event.preventDefault(); // 폼 제출 방지
            if (categoriesList.style.display === 'none' || categoriesList.style.display === '') {
                categoriesList.style.display = 'block'; // 카테고리 목록을 표시
            } else {
                categoriesList.style.display = 'none'; // 카테고리 목록을 숨김
            }
        });
    } else {
        console.error('Element with id "categoryToggle" not found');
    }

    // 클릭 외부 시 목록 숨김 처리
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!categoryToggle.contains(target) && !categoriesList.contains(target)) {
            categoriesList.style.display = 'none'; // 외부 클릭 시 목록 숨김
        }
    });
});
