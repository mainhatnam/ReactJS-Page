import { memo } from "react";
import { Link, useLocation } from "react-router"

const CategoryLink = ({Icon, text, routerPath} : {Icon:React.FC<React.SVGProps<SVGSVGElement>>,text:string,routerPath:string})  => {
    const {pathname} = useLocation();
    console.log("Link category");
    
    return <Link
        to={routerPath}
        className={`flex items-center gap-3 px-3 py-2 rounded-md ${
            pathname === routerPath
            ? " text-blue-600 bg-blue-50 font-medium"
            : "text-gray-700 hover:bg-gray-50 "
        }`}
      >
        <Icon className="h-5 w-5" />
        <span>{text}</span>
      </Link>
}

export default memo(CategoryLink);