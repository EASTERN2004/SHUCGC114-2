/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		// Play initial animations on page load.
		$window.on('load', function() {

			// --- ⬇️ 新增這一行 ---
			// 強制將捲軸滾動到最左上角 (0, 0)，以隱藏右側的白邊
			window.scrollTo(0, 0); 
			// --- ⬆️ 新增這一行 ---

			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 100
			});
			
		/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '981px',  '1280px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 100
			});

    // ===== 
    //  ⬇️  從這裡開始加入新的程式碼 ⬇️
    // =====

    // 1. 初始化 Bootstrap Modal
    // 確保在 jQuery(document).ready (即這個 function 內部) 執行
    // 1. 初始化 Bootstrap Modal
    var errorModal, successModal; // <-- 1. 在這裡宣告 successModal
    // 使用 jQuery 選擇器來確保 DOM 已載入
    $(function() {
        if (document.getElementById('errorModal')) {
             errorModal = new bootstrap.Modal(document.getElementById('errorModal'), {});
        }
        
        // --- ⬇️ 新增這一段 ⬇️ ---
        if (document.getElementById('successModal')) {
             successModal = new bootstrap.Modal(document.getElementById('successModal'), {});
        }
        // --- ⬆️ 新增結束 ⬆️ ---
    });


    // 2. 幫 "傳送" 按鈕綁定點擊事件
    $('#傳送').on('click', function(e) {
        
        // 獲取表單欄位的值，並 .trim() 去除前後空白
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
		var phone = $('#phone').val().trim();
        var subject = $('#subject').val().trim();
        var message = $('#message').val().trim();

        var errorMessage = ''; // 用來儲存錯誤訊息

        // 3. 檢查表單欄位 (這裡以檢查 "姓名" 和 "內容" 為例)
        if (name === '') {
            errorMessage = '「姓名」欄位不能為空白。';
        } else if (email === '') {
            errorMessage = '「信箱」欄位不能為空白。';
        } else if (phone === '') {
            errorMessage = '「手機」欄位不能為空白。';
        }else if (subject === '') {
            errorMessage = '「主旨」欄位不能為空白。';
        } else if (message === '') {
            errorMessage = '「內容」欄位不能為空白。';
        }
		
        // 4. 如果 errorMessage 不是空的 (表示有錯誤)
        if (errorMessage !== '') {
            // 更新 Modal 中的錯誤訊息文字
            $('#modalErrorMessage').text(errorMessage);
            
            // 顯示 Modal
            if (errorModal) {
                errorModal.show();
            }
            
        } else {
            // (可選) 如果所有欄位都通過驗證
			
			var formattedPhone = phone; // 預設為原始輸入
            // 檢查是否為 10 碼數字 (例如 09xxxxxxxx)
            if (phone.length === 10 && /^\d+$/.test(phone)) {
                // 格式化為 09XX-XXX-XXX
                formattedPhone = phone.substring(0, 4) + '-' + phone.substring(4, 7) + '-' + phone.substring(7, 10);
            }
            
            // --- ⬇️ 從這裡開始修改 ⬇️ ---

            // 1. 將表單資料填入 "成功 Modal" 的 <span> 標籤中
            $('#successName').text(name);
            $('#successEmail').text(email);
			$('#successformattedPhone').text(formattedPhone);
            $('#successSubject').text(subject);
            $('#successMessage').text(message); // 使用 .text() 來避免 XSS 攻擊
            
            // 2. 顯示 "成功 Modal"
            if (successModal) {
                successModal.show();
            }

            // 3. (可選) 清空表單欄位
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#subject').val('');
            $('#message').val('');
            
            // --- ⬆️ 修改結束 ⬆️ ---
        }
    });

    // ===== 
    //  ⬆️  加入新的程式碼到這裡為止 ⬆️
    // =====

})(jQuery);

})(jQuery);