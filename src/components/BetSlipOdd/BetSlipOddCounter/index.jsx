import React from 'react'

function BetSlipOddCounter({amount, onChangeInput, setAmount}) {
  return (
    <div className="bet__counter">
				<div className="counter__wrapper">
					<button className="counter__button">
						<svg width={20} height={20} onClick={() => setAmount(amount - 1)}>
							<use href="./img/icons/sprite.svg#minus-bet-slip"></use>
						</svg>
					</button>
					<input
						inputMode="decimal"
						className="counter__input"
						type="text"
						value={amount || ""}
						onChange={(e) => onChangeInput(e)}
					/>
					<button className="counter__button">
						<svg width={20} height={20} onClick={() => setAmount(amount + 1)}>
							<use href="./img/icons/sprite.svg#plus-bet-slip"></use>
						</svg>
					</button>
				</div>
				<button className="counter__max-bet">Max Bet</button>
			</div>
  )
}

export default BetSlipOddCounter