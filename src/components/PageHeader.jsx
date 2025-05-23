export default function PageHeader({ title, breadcrumb, children }) {
  const renderBreadcrumb = () => {
    if (typeof breadcrumb === "string") {
      return <span className="text-gray-500">{breadcrumb}</span>;
    }

    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <span key={index} className="text-gray-500 flex items-center">
          {item}
          {index < breadcrumb.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </span>
      ));
    }

    return null;
  };

  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      <div id="pageheader-left" className="flex flex-col">
        <h1 id="page-title" className="text-3xl font-semibold">
          {title}
        </h1>
        <div
          id="breadcrumb-links"
          className="flex flex-wrap items-center font-medium mt-2 space-x-1"
        >
          {renderBreadcrumb()}
        </div>
      </div>

      {/* Action Button (children) */}
      <div id="action-button">{children}</div>
    </div>
  );
}
