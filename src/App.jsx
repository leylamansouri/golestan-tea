import React from "react";
import tea from "../src/assets/tea-pic1.png";

const App = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">گلستان</div>
          <nav className="flex space-x-4 flex-row-reverse">
            <div className="text-gray-700 hover:text-green-700 cursor-pointer">
              خانه
            </div>
            <div className="text-gray-700 hover:text-green-700 cursor-pointer">
              محصولات
            </div>
            <div className="text-gray-700 hover:text-green-700 cursor-pointer">
              درباره ما
            </div>
            <div className="text-gray-700 hover:text-green-700 cursor-pointer">
              کاربران
            </div>
          </nav>
        </div>
      </header>

      <section
        className="relative bg-cover bg-center h-[500px] sm:h-[400px] xs:h-[300px]"
        style={{
          backgroundImage: `url('https://www.golestan.com/wp-content/uploads/2023/07/tea-pic1.png')`,
          height: "400px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-3xl xs:text-2xl font-bold mb-4">
              چای گلستان
            </h1>
            <p className="text-lg sm:text-base">چای محبوب ایرانیان</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 sm:px-2">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            درباره چای گلستان
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-base">
            گلستان یکی از معروف ترین برندهای چای در ایران است که انواع دمنوش های
            مرغوب را از بهترین مناطق عرضه می کند. تعهد ما به کیفیت و طعم، گلستان
            را برای نسل‌ها نام آشنا کرده است
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center px-4 sm:px-2">
          <h2 className="text-3xl font-bold text-green-700 mb-8">محصولات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={tea}
                alt="Golestan Tea"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold text-green-700 mt-4">
                چای سیاه گلستان
              </h3>
              <p className="text-gray-600 mt-2">چای سیاه تازه و خوش طعم</p>
              <div className="mt-4 inline-block bg-green-700 text-white py-2 px-4 rounded">
                خرید
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={tea}
                alt="Golestan Tea"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold text-green-700 mt-4">
                چای سبز گلستان
              </h3>
              <p className="text-gray-600 mt-2">چای سبز تازه و خوش طعم</p>
              <div className="mt-4 inline-block bg-green-700 text-white py-2 px-4 rounded">
                خرید{" "}
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={tea}
                alt="Golestan Tea"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold text-green-700 mt-4">
                چای زعفران گلستان
              </h3>
              <p className="text-gray-600 mt-2">چای زعفران تازه و خوش طعم</p>
              <div className="mt-4 inline-block bg-green-700 text-white py-2 px-4 rounded">
                خرید
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto text-center">
          <p>تمرین react</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
