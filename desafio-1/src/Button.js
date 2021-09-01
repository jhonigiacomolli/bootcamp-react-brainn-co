function Button ({ kind="primary" | "secundary", children }) {
    return (
        <button className={`button-${kind}`}>
            {children}
        </button>
    )
}
export default Button