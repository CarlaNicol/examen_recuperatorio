const OpenLink = ({ linkText, linkUrl }: { linkText: string, linkUrl: string }) => {
    return (
      <div>
        <a
          className="App-link"
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </div>
    );
  };
  
  export default OpenLink;
  