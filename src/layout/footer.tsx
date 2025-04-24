import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from 'lucide-react'
import { memo } from 'react';
function Footer() {
  console.log("Footer");
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-xl text-blue-600 mb-4">QuestFlow</h3>
            <p className="text-gray-600 mb-4">
              Nền tảng hỏi đáp hàng đầu cho cộng đồng lập trình viên Việt Nam.
              Chia sẻ kiến thức, học hỏi và phát triển cùng nhau.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Câu hỏi mới nhất
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Tags phổ biến
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Thành viên
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Hướng dẫn sử dụng
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Báo cáo lỗi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Liên hệ quảng cáo
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">support@questflow.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">+84 (0) 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Hà Nội, Việt Nam</span>
              </li>
            </ul>
            <div className="border-t mt-4 pt-3 text-left">
              <p className="text-gray-600">
                © 2024 QuestFlow. Tất cả quyền được bảo lưu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default memo(Footer)