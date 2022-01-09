
const Book = (props) => {
    const {img, title, author} = props
    // console.log(props)

    const clickHandler = (e) => {
        alert(e.target.value)
    }

    const complexExample = (author) => {
        console.log(author)
    }

    return (
        
            <div className="column" onMouseOver={() => {
                console.log(title)
            }}>
                <div className="ui card">
                    <div className="image">
                    <img src={img} />
                    </div>
                    <div className="content">
                        <a className="header">{author}</a>
                        <div className="meta">
                        <span className="date">{title}</span>
                        </div>
                        <div className="description">
                            {props.children}
                        </div>
                    </div>
                    <div className="extra content">
                        <button type='button' className='ui basic button' onClick={clickHandler}>Click Me</button>
                        <button type='button' className='ui primary button' onClick={() => complexExample(author)}>Complex Example</button>
                        
                    </div>
                </div>
            </div>
    )
}

export default Book