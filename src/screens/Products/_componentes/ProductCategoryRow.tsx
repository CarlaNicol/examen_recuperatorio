export function CategoryRow({ categoryName }: { categoryName: string }) {
    return (
      <tr className="bg-gray-200">
        <th colSpan={2} className="px-4 py-2">
          {categoryName}
        </th>
      </tr>
    );
  }
  