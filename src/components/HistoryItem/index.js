import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const deleteItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-list-items">
      <div className="time-logo-url-container">
        <p className="time">{timeAccessed}</p>
        <div className="small-device">
          <img src={logoUrl} className="logo-img" alt="domain logo" />
          <div className="logo-domain-container">
            <p className="logo-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button"
        onClick={deleteItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
