import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const CurrencyDropdown = () => {
    const {dispatch,currency} = useContext(AppContext)

    const options = [
        { label: '$ Dollar', value: '$' },
        { label: '£ Pound', value: '£' },
        { label: '€ Euro', value: '€' },
        { label: '₹ Rupee', value: '₹' }
      ]
    return (
        <div className="alert alert-secondary">
        <select className="custom-select bg-success text-white col-md-6" id="inputGroupSelect01" value={currency} onChange={(event) => {dispatch({type:"CHG_CURRENCY",payload:event.target.value})}}>
                        <option defaultValue>Choose...</option>
                        {options.map(option=> <option value={option.value} name={option.label}> {option.label}</option>)}
                  </select>
        </div>
    )
}