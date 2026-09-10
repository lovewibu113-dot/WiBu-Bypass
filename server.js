const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;


// =================================
// MIDDLEWARE
// =================================

app.use(express.json());

app.use(
  express.static(
    path.join(__dirname)
  )
);


// =================================
// API BYPASS
// =================================

app.post(
  "/api/bypass",
  async (req, res) => {

    try {

      const { url } = req.body;


      // Kiểm tra dữ liệu
      if (!url) {

        return res.status(400).json({
          success: false,
          message: "Thiếu link."
        });

      }


      // Kiểm tra URL
      let parsedUrl;

      try {

        parsedUrl = new URL(url);

      } catch {

        return res.status(400).json({
          success: false,
          message: "URL không hợp lệ."
        });

      }


      /*
       * Xác định dịch vụ
       */

      const hostname =
        parsedUrl.hostname.toLowerCase();


      let service = "unknown";


      if (
        hostname.includes("link4m")
      ) {

        service = "link4m";

      } else if (
        hostname.includes("layma")
      ) {

        service = "layma";

      } else if (
        hostname.includes("ontop")
      ) {

        service = "ontop";

      } else if (
        hostname.includes("gtraffic")
      ) {

        service = "gtraffic";

      }


      console.log(
        `[BYPASS] ${service}: ${url}`
      );


      /*
       * ===================================
       * API CỦA BẠN ĐẶT Ở ĐÂY
       * ===================================
       *
       * Chỉ gọi API chính thức / API mà
       * bạn có quyền sử dụng.
       *
       * Ví dụ:
       *
       * const response = await fetch(
       *   "https://api-cua-ban.com/bypass",
       *   {
       *     method: "POST",
       *     headers: {
       *       "Content-Type": "application/json"
       *     },
       *     body: JSON.stringify({
       *       url: url
       *     })
       *   }
       * );
       *
       * const result = await response.json();
       *
       * return res.json({
       *   success: true,
       *   url: result.url
       * });
       *
       */


      // Hiện tại chưa có API thật
      return res.json({

        success: false,

        message:
          `Đã nhận link ${service}, nhưng chưa cấu hình API xử lý.`

      });


    } catch (error) {

      console.error(error);

      return res.status(500).json({

        success: false,

        message:
          "Lỗi máy chủ."

      });

    }

  }
);


// =================================
// CHẠY SERVER
// =================================

app.listen(
  PORT,
  () => {

    console.log(
      `Minh Hieu Bypass đang chạy tại http://localhost:${PORT}`
    );

  }
);
