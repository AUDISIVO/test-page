function bindModal(triggerSelector, modalSelector, closeSelector) {
	const trigger  = document.querySelectorAll(triggerSelector),
		  modal    = document.querySelector(modalSelector),
		  close    = document.querySelector(closeSelector);

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				modal.style.display = "block";
				document.body.style.overflow = "hidden";
				modal.style.zIndex = "3";
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = "none";
			document.body.style.overflow = "";
			modal.style.zIndex = "-3";
		})

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = "none";
				document.body.style.overflow = "";
			}
		});
}
bindModal('.link', '.popup', '.popup__content .popup__close');

function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
	const header  = document.querySelector(headerSelector),
		  tab     = document.querySelectorAll(tabSelector),
		  content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = "none";
		})

		tab.forEach(item => {
			item.classList.remove(activeClass);
		})
	};

	function showTabContent(i = 0) {
		content[i].style.display = "block";
		tab[i].classList.add(activeClass);
	};

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if ( target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
			target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			})
		}
	});
}
tabs('.tabs__header', '.tabs__tab', '.tabs__block', 'active');