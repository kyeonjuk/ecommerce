// 장바구니 추가 시
function addToCart(productId) {
    event.preventDefault(); // 기본 링크 동작 방지

    // input의 value 값을 가져옴
    const quantity = document.getElementById('quantity-input').value;

    // API로 데이터 전송
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId: productId, // 상품 ID 추가
            quantity: quantity
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// 찜하기 시
function addToFavorites(productId) {
    event.preventDefault(); // 기본 링크 동작 방지

    // API로 데이터 전송
    fetch('YOUR_FAVORITES_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId: productId // 상품 ID 추가
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // 필요시 사용자에게 피드백 제공
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
