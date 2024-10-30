// header 상단 탭 active
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname; // 현재 경로 가져오기
    const menuItems = document.querySelectorAll('ul li');

    menuItems.forEach(item => {
        const link = item.querySelector('a');
        const href = link.getAttribute('href');

        // href 가 현재 경로와 일치하면 active 클래스 추가
        if (currentPath === href) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});


// 메인화면 인기상품 카테고리 선택시 -> API 호출
//document.addEventListener('DOMContentLoaded', function() {
//    const items = document.querySelectorAll('.featured__controls li');
//
//    items.forEach(item => {
//        item.addEventListener('click', function() {
//            const filterValue = this.getAttribute('data-filter');
//
//            // Fetch API를 사용하여 GET 요청 보내기
//            fetch(`https://your-api-endpoint.com?filter=${encodeURIComponent(filterValue)}`)
//                .then(response => {
//                    if (!response.ok) {
//                        throw new Error('Network response was not ok');
//                    }
//                    return response.json(); // 응답을 JSON으로 변환
//                })
//                .then(data => {
//                    console.log(data); // 성공적으로 받은 데이터 처리
//                    // 필요한 경우, 결과를 화면에 표시하는 코드 추가
//                })
//                .catch(error => {
//                    console.error('API 요청 오류:', error);
//                });
//
//            // 클릭한 li에 active 클래스 추가
//            items.forEach(li => li.classList.remove('active'));
//            this.classList.add('active');
//        });
//    });
//});

// 상품별 썸네일이미지의 찜하기 기능
function toLike(productId) {

    event.preventDefault(); // 기본 링크 동작 방지

    // API 요청을 보낼 URL
    const apiUrl = 'http://localhost:8080/api/products/' + productId; // 실제 URL로 변경

    fetch(apiUrl, {
        method: 'POST', // 또는 'GET', 사용에 따라
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId }), // 필요한 경우 데이터 추가
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


// 상품별 썸네일이미지의 장바구니 추가 기능
function toCart(productId) {

    event.preventDefault(); // 기본 링크 동작 방지

    // API 요청을 보낼 URL
    const apiUrl = 'http://localhost:8080/api/products/' + productId; // 실제 URL로 변경

    fetch(apiUrl, {
        method: 'POST', // 또는 'GET', 사용에 따라
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId }), // 필요한 경우 데이터 추가
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}