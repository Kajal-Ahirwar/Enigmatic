document.addEventListener('DOMContentLoaded', ()=>{
	const tryBtn = document.getElementById('try-btn');
	const input = document.getElementById('code-input');
	const result = document.getElementById('teaser-result');
	const card = document.getElementById('teaser-card');
	const lock = card.querySelector('.lock-icon');

	const CORRECT = 'ENIG';

	function showSuccess(){
		lock.textContent = '🔓';
		result.textContent = 'Unlocked — Welcome, curious mind.';
		result.classList.add('confetti');
		input.disabled = true;
		tryBtn.disabled = true;
	}

	function showFail(){
		result.textContent = 'Nope — try again.';
		setTimeout(()=>{ result.textContent = ''; }, 1400);
	}

	tryBtn.addEventListener('click', ()=>{
		const val = (input.value || '').toUpperCase().trim();
		if(!val) return;
		if(val === CORRECT) showSuccess(); else showFail();
	});

	input.addEventListener('keydown', (e)=>{
		if(e.key === 'Enter') tryBtn.click();
	});
});

