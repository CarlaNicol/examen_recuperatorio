const OpenLink = ({ title, url }: { title: string, url: string }) => {
  return (
    <div>
      <a
        className="App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  );
};

export default OpenLink;
