function removeItem(itemId) {
    if (confirm("정말로 이 아이템을 삭제하시겠습니까?")) {
        fetch(`/api/cart/remove/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // 삭제가 성공했을 때 UI 업데이트 (예: 행 삭제)
                location.reload(); // 페이지 새로고침
            } else {
                alert("삭제 중 오류가 발생했습니다.");
            }
        })
        .catch(error => {
            console.error('삭제 요청 오류:', error);
        });
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.cart-checkbox');
    const selectAllCheckbox = document.getElementById('select-all');
    const sumPriceElement = document.querySelectorAll('.shoping__checkout ul li span')[0]; // 합계
    const addToCartButton = document.getElementById('add-to-cart');


    // 전체 선택 체크박스에 대한 이벤트 리스너
    selectAllCheckbox.addEventListener('change', function() {
        const isChecked = selectAllCheckbox.checked; // 전체 선택 체크 상태
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked; // 전체 선택 상태로 설정
        });
        updateTotal(); // 상태 변화 후 총합 업데이트
    });

    // 수량 수정 버튼 클릭 이벤트
    document.querySelectorAll('.update-quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr'); // 버튼이 있는 행
            const quantityInput = row.querySelector('.quantity-input');
            const priceCell = row.querySelector('.shoping__cart__price');
            const totalCell = row.querySelector('.shoping__cart__total');

            const quantity = parseInt(quantityInput.value, 10);
            const price = parseFloat(priceCell.textContent.replace('원', '').trim());

            if (!isNaN(quantity) && quantity > 0) {
                const total = price * quantity;
                totalCell.setAttribute('data-total', total); // 총합 데이터 속성 업데이트
                totalCell.textContent = `${total}원`; // 총합 텍스트 업데이트
                updateTotal(); // 전체 금액 업데이트
            } else {
                alert('올바른 수량을 입력해주세요.');
            }
        });
    });

    // 선택된 상품의 총합 업데이트
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    // 최종금액 추가 + 선택
    function updateTotal() {
        let total = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const totalCell = checkbox.closest('tr').querySelector('.shoping__cart__total');

                // totalCell이 null인지 확인
                if (totalCell) {
                    const totalValue = parseFloat(totalCell.getAttribute('data-total'));
                    if (!isNaN(totalValue)) {
                        total += totalValue;
                    }
                }
            }
        });

        sumPriceElement.textContent = `${total}원`;
    }

    // 장바구니에 추가
    addToCartButton.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 링크 동작 방지
        const selectedItems = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const row = checkbox.closest('tr');
                const item = {  // Request Body 리스트
                    id: row.getAttribute('data-id'), // 데이터 속성에서 ID 가져오기
                    name: row.querySelector('h5').textContent,
                    price: parseFloat(row.querySelector('.shoping__cart__total').getAttribute('data-total')),
                    quantity: parseInt(row.querySelector('.pro-qty input').value, 10),
                };
                selectedItems.push(item);
            }
        });

        // 체크된 항목이 없으면 알림
        if (selectedItems.length === 0) {
            alert('장바구니에 추가할 항목이 없습니다.');
            return; // 함수 종료
        }

        // API 호출
        fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedItems)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('장바구니에 추가되었습니다!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('장바구니에 추가하는 데 실패했습니다.');
        });
    });
});


