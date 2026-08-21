(() => {
  "use strict";

  const translations = {
    en: {
      "meta.title": "AB Corp + Grit Paycard",
      "meta.description": "AB Corp employees can learn about the Grit Visa Paycard and ask Human Resources to contact them about enrollment.",
      "a11y.skip": "Skip to main content",
      "nav.benefits": "Benefits",
      "nav.how": "How it works",
      "nav.moneygram": "Send money",
      "nav.faq": "FAQ",
      "nav.cta": "Request a Paycard",
      "hero.eyebrow": "An employee benefit from AB Corp + Grit Financial",
      "hero.title": "Your pay.<br><span>No paper check.</span><br>More control.",
      "hero.lede": "AB Corp has partnered with Grit Financial to help eligible employees receive pay digitally on a Grit Visa Paycard - a simpler way to get paid, spend, withdraw cash and manage money.",
      "hero.cta": "Ask HR to contact me",
      "hero.flyer": "View the employee flyer",
      "hero.reassure1": "Free to register",
      "hero.reassure2": "No monthly fee*",
      "hero.reassure3": "HR-guided enrollment",
      "hero.proof1Title": "Up to 2 days early",
      "hero.proof1Text": "When your employer releases payroll*",
      "hero.proof2Title": "55,000+ ATMs",
      "hero.proof2Text": "Fee-free in the Allpoint network*",
      "partnership.title": "AB Corp and Grit are working together to make payday easier.",
      "partnership.text": "This page explains the benefit and lets you ask AB Corp Human Resources to contact you. The interest form does not open an account or change your current pay method.",
      "benefits.kicker": "A better way to receive your pay",
      "benefits.title": "From paycheck to paycard - without the bank trip.",
      "benefits.lede": "Your pay is deposited to your card account, so you can use it for everyday purchases, cash access and transfers after enrollment and account activation.",
      "features.digitalTitle": "Get paid digitally",
      "features.digitalText": "No more waiting in line to deposit or cash a paper paycheck. Direct deposit sends your pay to the Grit Paycard account.",
      "features.earlyTitle": "Payday up to 2 days early*",
      "features.earlyText": "You may receive pay as soon as AB Corp releases payroll funds to your account - you do not have to wait for the scheduled date.",
      "features.atmTitle": "Cash when you need it",
      "features.atmText": "Access 55,000+ fee-free Allpoint ATMs, plus cash back at participating retailer registers. Other fees may apply.*",
      "features.cardsTitle": "Physical + virtual card",
      "features.cardsText": "After registration and activation, use a virtual card account in the app. Your physical card typically arrives in about 5-7 business days.",
      "features.walletTitle": "Mobile wallet friendly",
      "features.walletText": "Use the card with supported mobile wallets and anywhere Visa debit cards are accepted, subject to account terms.",
      "features.transferTitle": "Flexible money movement",
      "features.transferText": "Transfer funds to an external bank account the same day for a fee, or choose a fee-free standard transfer that may take 5-7 business days.",
      "visa.kicker": "Use it for everyday life",
      "visa.title": "Accepted anywhere Visa debit cards are accepted.",
      "visa.text": "Shop in stores or online, pay bills and manage your card from the Grit Financial app.",
      "how.kicker": "Simple and HR-supported",
      "how.title": "How enrollment works",
      "how.lede": "Start with a contact request. AB Corp HR will guide you through the actual enrollment process.",
      "steps.oneTitle": "Tell HR you are interested",
      "steps.oneText": "Complete the short form below. It only asks for contact information so Human Resources can follow up.",
      "steps.twoTitle": "Complete secure identity verification",
      "steps.twoText": "During account enrollment, Grit will ask you to verify your identity. This happens in Grit's secure enrollment flow and is separate from this interest form.",
      "steps.threeTitle": "Activate your account and card",
      "steps.threeText": "After approval and activation, access your virtual card in the app and receive a physical card by mail in about 5-7 business days.",
      "steps.fourTitle": "AB Corp sends your pay digitally",
      "steps.fourText": "Once your paycard direct deposit is set up, your available payroll funds are deposited to your Grit card account.",
      "privacy.title": "Keep sensitive information out of the interest form.",
      "privacy.text": "Do not enter a Social Security number, bank account number, password or identity document here. Identity verification happens later in Grit's secure enrollment process.",
      "moneygram.kicker": "Stay connected to the people who matter",
      "moneygram.title": "Send money home from the Grit app.",
      "moneygram.lede": "After identity verification, account activation and final approval, eligible customers can use MoneyGram for domestic and international money transfers directly from their Grit account.",
      "moneygram.point1": "Send domestically or internationally",
      "moneygram.point2": "Start the transfer inside the Grit app",
      "moneygram.point3": "Choose available delivery and receive methods",
      "moneygram.disclaimer": "MoneyGram fees, exchange rates, transfer limits, destination availability and delivery timing vary by transaction and eligibility. Service is subject to compliance requirements and operating hours.",
      "moneygram.badgeTitle": "Domestic + international",
      "moneygram.badgeText": "Available to eligible, approved customers",
      "trust.kicker": "Confidence built in",
      "trust.title": "Recognizable banking, payment and security infrastructure.",
      "trust.lede": "Grit's official website highlights Visa, Community Federal Savings Bank, PCI security standards and SOC reporting as part of its trust and security ecosystem.",
      "trust.fact1Title": "Banking partner",
      "trust.fact1Text": "The Grit Visa Prepaid Card is issued by Community Federal Savings Bank, Member FDIC, pursuant to a license from Visa U.S.A. Inc.",
      "trust.fact2Title": "FDIC insurance eligibility",
      "trust.fact2Text": "Eligible funds are FDIC insured up to $250,000 through Community Federal Savings Bank, subject to applicable requirements.",
      "trust.fact3Title": "Support when you need it",
      "trust.fact3Text": "Grit representatives are available Monday-Friday, 10 AM-7 PM Central Time.",
      "form.kicker": "Interested in the paycard?",
      "form.title": "Ask AB Corp HR to contact you.",
      "form.lede": "Share only the information HR needs to reach you. This is a request for contact - not a Grit account application.",
      "form.nextTitle": "What happens next",
      "form.next1": "Your request is added to a private Google Sheet controlled by AB Corp HR.",
      "form.next2": "An HR representative contacts you using your preferred language and time.",
      "form.next3": "HR explains enrollment and helps you complete the secure Grit account process.",
      "form.helpTitle": "Already enrolled and need Grit support?",
      "form.cardTitle": "Request a call from HR",
      "form.cardText": "Fields marked with * are required.",
      "form.fullName": "Full name *",
      "form.fullNamePlaceholder": "Your full name",
      "form.employeeId": "Employee ID",
      "form.employeeIdPlaceholder": "Optional",
      "form.phone": "Mobile phone *",
      "form.phonePlaceholder": "(555) 555-5555",
      "form.language": "Preferred contact language *",
      "form.select": "Select one",
      "form.english": "English",
      "form.vietnamese": "Vietnamese",
      "form.time": "Best time to contact *",
      "form.morning": "Morning",
      "form.afternoon": "Afternoon",
      "form.evening": "Evening",
      "form.consent": "I agree that AB Corp Human Resources may contact me about Grit Paycard enrollment. I understand that submitting this form does not open an account or change my current pay method.",
      "form.warning": "Do not enter your Social Security number, bank information, password or identity documents on this form.",
      "form.submit": "Send my request",
      "form.privacy": "Your information is intended for AB Corp HR enrollment follow-up. Limit access to the connected Google Sheet to authorized HR staff.",
      "faq.kicker": "Questions before you decide",
      "faq.title": "Paycard and identity verification FAQs",
      "faq.lede": "These answers explain the basics. AB Corp HR can clarify program-specific details, and official Grit terms control the account.",
      "faq.terms": "Read Grit Terms & Conditions",
      "faq.q1": "What is a Grit Paycard?",
      "faq.a1": "It is a prepaid card account that can receive your pay by direct deposit. It is not a credit card. You can use available funds for purchases, cash access and supported transfers, subject to the card agreement.",
      "faq.q2": "Does submitting this form change how I get paid?",
      "faq.a2": "No. This form only asks AB Corp HR to contact you. Your pay method changes only after you complete enrollment and any required payroll authorization with HR.",
      "faq.q3": "Is there a signup or monthly fee?",
      "faq.a3": "Registration is free and the flyer states there is no subscription or monthly fee. Other fees can apply, including certain out-of-network ATM, over-the-counter, replacement card or faster transfer fees. Review the current fee schedule and terms.",
      "faq.q4": "What is KYC identity verification, and why is it needed?",
      "faq.a4": "Grit uses an online identity-verification process to help confirm customer identity and protect against fraud. The supplied employee flyer states that identity verification and final approval are required for full account features. Verification happens during secure Grit enrollment, not on this interest form.",
      "faq.q5": "What information might I need for identity verification?",
      "faq.a5": "The supplied employee flyer does not list the exact information or documents required. Follow the instructions in Grit's secure enrollment flow or ask AB Corp HR. Do not send identity documents or other sensitive information through this contact form.",
      "faq.q6": "When can I start using the card?",
      "faq.a6": "After account registration, approval and activation, the flyer states that a virtual card account is available in the Grit app. A physical card is expected by mail in about 5-7 business days.",
      "faq.q7": "Can I use MoneyGram to send money to family?",
      "faq.a7": "Eligible customers can access domestic and international MoneyGram transfers after identity verification, account activation and final approval. Fees, exchange rates, limits, destination availability and transfer timing vary.",
      "faq.q8": "Who do I contact for help?",
      "faq.a8": "Contact AB Corp Human Resources for enrollment help. For Grit card or app support, call <a href=\"tel:+18444748226\">844-474-8226</a> and press 0, Monday-Friday, 10 AM-7 PM Central Time, or email <a href=\"mailto:support@gritfinancial.org\">support@gritfinancial.org</a>.",
      "footer.partner": "Paycard program partner for AB Corp",
      "footer.legal1": "The Grit Visa Prepaid Card is issued by Community Federal Savings Bank, Member FDIC, pursuant to a license from Visa U.S.A. Inc. The Card may be used everywhere Visa debit cards are accepted. Grit Financial Inc. is a financial technology company, not a bank. Banking services are provided by Community Federal Savings Bank. Eligible funds are FDIC insured up to $250,000, subject to applicable requirements.",
      "footer.legal2": "*Early direct deposit availability depends on when the employer releases payroll funds. See current terms for fees such as out-of-network ATM or over-the-counter withdrawals, lost card replacement and faster-than-standard transfers. MoneyGram fees, exchange rates, limits, delivery timing and availability vary by transaction, destination and eligibility.",
      "footer.translation": "Vietnamese content is provided for convenience. Review the official English account agreements, disclosures and fee schedule before enrollment.",
      "footer.terms": "Terms & Conditions",
      "footer.privacy": "Privacy Policy",
      "footer.flyer": "Employee flyer",
      "validation.required": "This field is required.",
      "validation.phone": "Enter a valid phone number.",
      "validation.consent": "Please agree before submitting.",
      "status.submitting": "Sending your request...",
      "status.success": "Thank you. Your request was sent to AB Corp HR. They will contact you using the information you provided.",
      "status.error": "We could not send your request. Please try again or contact AB Corp HR directly.",
      "status.setup": "The page is ready, but the Google Sheet connection is not configured yet. Paste the deployed Apps Script Web App URL into config.js before publishing."
    },
    vi: {
      "meta.title": "AB Corp + Grit Paycard | Nhận lương điện tử",
      "meta.description": "Nhân viên AB Corp có thể tìm hiểu về Grit Visa Paycard và yêu cầu bộ phận Nhân sự liên hệ để hỗ trợ đăng ký.",
      "a11y.skip": "Chuyển đến nội dung chính",
      "nav.benefits": "Quyền lợi",
      "nav.how": "Cách đăng ký",
      "nav.moneygram": "Chuyển tiền",
      "nav.faq": "Câu hỏi",
      "nav.cta": "Yêu cầu Paycard",
      "hero.eyebrow": "Quyền lợi nhân viên từ AB Corp + Grit Financial",
      "hero.title": "Nhận lương.<br><span>Không cần séc giấy.</span><br>Chủ động hơn.",
      "hero.lede": "AB Corp đã hợp tác với Grit Financial để giúp nhân viên đủ điều kiện nhận lương điện tử qua Grit Visa Paycard - cách đơn giản hơn để nhận lương, chi tiêu, rút tiền mặt và quản lý tiền.",
      "hero.cta": "Yêu cầu HR liên hệ với tôi",
      "hero.flyer": "Xem tờ giới thiệu cho nhân viên",
      "hero.reassure1": "Đăng ký miễn phí",
      "hero.reassure2": "Không phí hàng tháng*",
      "hero.reassure3": "HR hướng dẫn đăng ký",
      "hero.proof1Title": "Sớm hơn đến 2 ngày",
      "hero.proof1Text": "Khi công ty phát hành tiền lương*",
      "hero.proof2Title": "Hơn 55.000 ATM",
      "hero.proof2Text": "Miễn phí trong mạng Allpoint*",
      "partnership.title": "AB Corp và Grit đang hợp tác để ngày nhận lương thuận tiện hơn.",
      "partnership.text": "Trang này giải thích quyền lợi và cho phép bạn yêu cầu bộ phận Nhân sự AB Corp liên hệ. Biểu mẫu quan tâm không mở tài khoản và không thay đổi cách bạn đang nhận lương.",
      "benefits.kicker": "Cách thuận tiện hơn để nhận lương",
      "benefits.title": "Từ séc lương sang Paycard - không cần đến ngân hàng.",
      "benefits.lede": "Tiền lương được gửi vào tài khoản thẻ để bạn có thể mua sắm hằng ngày, rút tiền mặt và chuyển tiền sau khi hoàn tất đăng ký và kích hoạt tài khoản.",
      "features.digitalTitle": "Nhận lương điện tử",
      "features.digitalText": "Không cần xếp hàng để gửi hoặc đổi séc giấy. Tiền lương được chuyển trực tiếp vào tài khoản Grit Paycard.",
      "features.earlyTitle": "Nhận lương sớm hơn đến 2 ngày*",
      "features.earlyText": "Bạn có thể nhận lương ngay khi AB Corp phát hành tiền lương vào tài khoản - không cần chờ đến ngày trả lương dự kiến.",
      "features.atmTitle": "Rút tiền khi cần",
      "features.atmText": "Sử dụng hơn 55.000 ATM Allpoint miễn phí trong mạng lưới và nhận tiền mặt tại quầy thanh toán của nhà bán lẻ tham gia. Có thể áp dụng phí khác.*",
      "features.cardsTitle": "Thẻ vật lý + thẻ ảo",
      "features.cardsText": "Sau khi đăng ký và kích hoạt, bạn có thể dùng tài khoản thẻ ảo trong ứng dụng. Thẻ vật lý thường được gửi đến trong khoảng 5-7 ngày làm việc.",
      "features.walletTitle": "Tương thích ví điện tử",
      "features.walletText": "Dùng thẻ với các ví điện tử được hỗ trợ và tại mọi nơi chấp nhận thẻ Visa Debit, theo điều khoản tài khoản.",
      "features.transferTitle": "Chuyển tiền linh hoạt",
      "features.transferText": "Chuyển tiền đến tài khoản ngân hàng bên ngoài trong ngày với một khoản phí, hoặc chọn chuyển tiêu chuẩn miễn phí có thể mất 5-7 ngày làm việc.",
      "visa.kicker": "Dùng cho các nhu cầu hằng ngày",
      "visa.title": "Được chấp nhận tại mọi nơi chấp nhận thẻ Visa Debit.",
      "visa.text": "Mua sắm tại cửa hàng hoặc trực tuyến, thanh toán hóa đơn và quản lý thẻ trong ứng dụng Grit Financial.",
      "how.kicker": "Đơn giản và có HR hỗ trợ",
      "how.title": "Quy trình đăng ký",
      "how.lede": "Bắt đầu bằng yêu cầu liên hệ. Bộ phận Nhân sự AB Corp sẽ hướng dẫn bạn trong quy trình đăng ký chính thức.",
      "steps.oneTitle": "Cho HR biết bạn quan tâm",
      "steps.oneText": "Điền biểu mẫu ngắn bên dưới. Biểu mẫu chỉ yêu cầu thông tin liên hệ để Nhân sự có thể trao đổi với bạn.",
      "steps.twoTitle": "Hoàn tất xác minh danh tính an toàn",
      "steps.twoText": "Trong quá trình mở tài khoản, Grit sẽ yêu cầu bạn xác minh danh tính. Bước này diễn ra trong quy trình đăng ký bảo mật của Grit và tách biệt với biểu mẫu quan tâm này.",
      "steps.threeTitle": "Kích hoạt tài khoản và thẻ",
      "steps.threeText": "Sau khi được phê duyệt và kích hoạt, bạn có thể dùng thẻ ảo trong ứng dụng và nhận thẻ vật lý qua bưu điện trong khoảng 5-7 ngày làm việc.",
      "steps.fourTitle": "AB Corp gửi lương điện tử",
      "steps.fourText": "Sau khi thiết lập tiền gửi trực tiếp vào Paycard, tiền lương khả dụng sẽ được gửi vào tài khoản thẻ Grit của bạn.",
      "privacy.title": "Không nhập thông tin nhạy cảm vào biểu mẫu quan tâm.",
      "privacy.text": "Không nhập số An sinh Xã hội, số tài khoản ngân hàng, mật khẩu hoặc giấy tờ tùy thân tại đây. Việc xác minh danh tính sẽ diễn ra sau trong quy trình đăng ký bảo mật của Grit.",
      "moneygram.kicker": "Giữ kết nối với những người quan trọng",
      "moneygram.title": "Chuyển tiền về nhà từ ứng dụng Grit.",
      "moneygram.lede": "Sau khi xác minh danh tính, kích hoạt tài khoản và được phê duyệt cuối cùng, khách hàng đủ điều kiện có thể dùng MoneyGram để chuyển tiền trong nước và quốc tế trực tiếp từ tài khoản Grit.",
      "moneygram.point1": "Chuyển tiền trong nước hoặc quốc tế",
      "moneygram.point2": "Bắt đầu giao dịch ngay trong ứng dụng Grit",
      "moneygram.point3": "Chọn phương thức gửi và nhận hiện có",
      "moneygram.disclaimer": "Phí MoneyGram, tỷ giá, hạn mức, quốc gia nhận và thời gian giao tiền thay đổi theo giao dịch và điều kiện đủ tiêu chuẩn. Dịch vụ tuân theo các yêu cầu pháp lý và giờ hoạt động.",
      "moneygram.badgeTitle": "Trong nước + quốc tế",
      "moneygram.badgeText": "Dành cho khách hàng đủ điều kiện và được phê duyệt",
      "trust.kicker": "An tâm từ nền tảng",
      "trust.title": "Hạ tầng ngân hàng, thanh toán và bảo mật đáng tin cậy.",
      "trust.lede": "Trang web chính thức của Grit nêu Visa, Community Federal Savings Bank, tiêu chuẩn bảo mật PCI và báo cáo SOC trong hệ sinh thái tin cậy và bảo mật của mình.",
      "trust.fact1Title": "Đối tác ngân hàng",
      "trust.fact1Text": "Thẻ trả trước Grit Visa do Community Federal Savings Bank, Thành viên FDIC, phát hành theo giấy phép của Visa U.S.A. Inc.",
      "trust.fact2Title": "Đủ điều kiện bảo hiểm FDIC",
      "trust.fact2Text": "Các khoản tiền đủ điều kiện được bảo hiểm FDIC lên đến 250.000 USD thông qua Community Federal Savings Bank, tùy theo các yêu cầu áp dụng.",
      "trust.fact3Title": "Hỗ trợ khi bạn cần",
      "trust.fact3Text": "Đại diện Grit làm việc từ Thứ Hai đến Thứ Sáu, 10 giờ sáng-7 giờ tối theo Giờ Trung tâm Hoa Kỳ.",
      "form.kicker": "Bạn quan tâm đến Paycard?",
      "form.title": "Yêu cầu Nhân sự AB Corp liên hệ với bạn.",
      "form.lede": "Chỉ chia sẻ thông tin HR cần để liên hệ. Đây là yêu cầu được liên hệ - không phải đơn mở tài khoản Grit.",
      "form.nextTitle": "Bước tiếp theo",
      "form.next1": "Yêu cầu của bạn được thêm vào Google Sheet riêng do bộ phận Nhân sự AB Corp quản lý.",
      "form.next2": "Đại diện HR liên hệ với bạn bằng ngôn ngữ và thời gian bạn chọn.",
      "form.next3": "HR giải thích cách đăng ký và hỗ trợ bạn hoàn tất quy trình mở tài khoản Grit an toàn.",
      "form.helpTitle": "Đã đăng ký và cần Grit hỗ trợ?",
      "form.cardTitle": "Yêu cầu HR gọi cho bạn",
      "form.cardText": "Các mục có dấu * là bắt buộc.",
      "form.fullName": "Họ và tên *",
      "form.fullNamePlaceholder": "Nhập họ và tên",
      "form.employeeId": "Mã nhân viên",
      "form.employeeIdPlaceholder": "Không bắt buộc",
      "form.phone": "Số điện thoại di động *",
      "form.phonePlaceholder": "(555) 555-5555",
      "form.language": "Ngôn ngữ liên hệ ưu tiên *",
      "form.select": "Chọn một mục",
      "form.english": "Tiếng Anh",
      "form.vietnamese": "Tiếng Việt",
      "form.time": "Thời gian liên hệ thuận tiện *",
      "form.morning": "Buổi sáng",
      "form.afternoon": "Buổi chiều",
      "form.evening": "Buổi tối",
      "form.consent": "Tôi đồng ý để bộ phận Nhân sự AB Corp liên hệ về việc đăng ký Grit Paycard. Tôi hiểu rằng gửi biểu mẫu này không mở tài khoản và không thay đổi cách tôi đang nhận lương.",
      "form.warning": "Không nhập số An sinh Xã hội, thông tin ngân hàng, mật khẩu hoặc giấy tờ tùy thân vào biểu mẫu này.",
      "form.submit": "Gửi yêu cầu của tôi",
      "form.privacy": "Thông tin của bạn chỉ nhằm giúp Nhân sự AB Corp liên hệ về việc đăng ký. Chỉ nhân viên HR được ủy quyền mới nên có quyền truy cập Google Sheet kết nối.",
      "faq.kicker": "Câu hỏi trước khi quyết định",
      "faq.title": "Câu hỏi về Paycard và xác minh danh tính",
      "faq.lede": "Các câu trả lời sau giải thích những điểm cơ bản. HR của AB Corp có thể làm rõ chi tiết chương trình, và điều khoản chính thức của Grit sẽ áp dụng cho tài khoản.",
      "faq.terms": "Đọc Điều khoản & Điều kiện của Grit",
      "faq.q1": "Grit Paycard là gì?",
      "faq.a1": "Đây là tài khoản thẻ trả trước có thể nhận lương bằng tiền gửi trực tiếp. Đây không phải thẻ tín dụng. Bạn có thể dùng số tiền khả dụng để mua sắm, rút tiền mặt và thực hiện các giao dịch chuyển tiền được hỗ trợ, theo thỏa thuận thẻ.",
      "faq.q2": "Gửi biểu mẫu này có thay đổi cách tôi nhận lương không?",
      "faq.a2": "Không. Biểu mẫu này chỉ yêu cầu Nhân sự AB Corp liên hệ với bạn. Cách nhận lương chỉ thay đổi sau khi bạn hoàn tất đăng ký và mọi giấy ủy quyền tiền lương cần thiết với HR.",
      "faq.q3": "Có phí đăng ký hoặc phí hàng tháng không?",
      "faq.a3": "Đăng ký miễn phí và tờ giới thiệu nêu rằng không có phí thuê bao hoặc phí hàng tháng. Một số phí khác có thể áp dụng, gồm một số giao dịch ATM ngoài mạng, rút tiền tại quầy, thay thẻ hoặc chuyển tiền nhanh. Hãy xem biểu phí và điều khoản hiện hành.",
      "faq.q4": "Xác minh danh tính KYC là gì và vì sao cần thực hiện?",
      "faq.a4": "Grit sử dụng quy trình xác minh danh tính trực tuyến để giúp xác nhận khách hàng và hỗ trợ phòng chống gian lận. Tờ giới thiệu nhân viên cho biết cần hoàn tất xác minh danh tính và được phê duyệt cuối cùng để sử dụng đầy đủ các tính năng của tài khoản. Bước xác minh diễn ra trong quy trình đăng ký bảo mật của Grit, không phải trên biểu mẫu quan tâm này.",
      "faq.q5": "Tôi có thể cần thông tin gì để xác minh danh tính?",
      "faq.a5": "Tờ giới thiệu nhân viên không nêu chính xác thông tin hoặc giấy tờ cần thiết. Hãy làm theo hướng dẫn trong quy trình đăng ký bảo mật của Grit hoặc hỏi Nhân sự AB Corp. Không gửi giấy tờ tùy thân hoặc thông tin nhạy cảm qua biểu mẫu liên hệ này.",
      "faq.q6": "Khi nào tôi có thể bắt đầu dùng thẻ?",
      "faq.a6": "Sau khi đăng ký tài khoản, được phê duyệt và kích hoạt, tờ giới thiệu cho biết tài khoản thẻ ảo sẽ có trong ứng dụng Grit. Thẻ vật lý dự kiến được gửi qua bưu điện trong khoảng 5-7 ngày làm việc.",
      "faq.q7": "Tôi có thể dùng MoneyGram để gửi tiền cho gia đình không?",
      "faq.a7": "Khách hàng đủ điều kiện có thể dùng MoneyGram để chuyển tiền trong nước và quốc tế sau khi xác minh danh tính, kích hoạt tài khoản và được phê duyệt cuối cùng. Phí, tỷ giá, hạn mức, quốc gia nhận và thời gian chuyển tiền có thể thay đổi.",
      "faq.q8": "Tôi liên hệ ai khi cần trợ giúp?",
      "faq.a8": "Liên hệ bộ phận Nhân sự AB Corp để được hỗ trợ đăng ký. Để được hỗ trợ về thẻ hoặc ứng dụng Grit, gọi <a href=\"tel:+18444748226\">844-474-8226</a> và bấm 0, từ Thứ Hai đến Thứ Sáu, 10 giờ sáng-7 giờ tối theo Giờ Trung tâm Hoa Kỳ, hoặc email <a href=\"mailto:support@gritfinancial.org\">support@gritfinancial.org</a>.",
      "footer.partner": "Đối tác chương trình Paycard của AB Corp",
      "footer.legal1": "Thẻ trả trước Grit Visa do Community Federal Savings Bank, Thành viên FDIC, phát hành theo giấy phép của Visa U.S.A. Inc. Thẻ có thể được sử dụng tại mọi nơi chấp nhận thẻ Visa Debit. Grit Financial Inc. là công ty công nghệ tài chính, không phải ngân hàng. Dịch vụ ngân hàng do Community Federal Savings Bank cung cấp. Các khoản tiền đủ điều kiện được bảo hiểm FDIC lên đến 250.000 USD, tùy theo các yêu cầu áp dụng.",
      "footer.legal2": "*Việc nhận tiền gửi trực tiếp sớm phụ thuộc vào thời điểm công ty phát hành tiền lương. Xem điều khoản hiện hành về các phí như ATM ngoài mạng, rút tiền tại quầy, thay thẻ bị mất và chuyển tiền nhanh hơn tiêu chuẩn. Phí MoneyGram, tỷ giá, hạn mức, thời gian giao tiền và khả năng cung cấp thay đổi theo giao dịch, quốc gia và điều kiện đủ tiêu chuẩn.",
      "footer.translation": "Nội dung tiếng Việt được cung cấp để thuận tiện. Vui lòng xem thỏa thuận tài khoản, thông tin công bố và biểu phí chính thức bằng tiếng Anh trước khi đăng ký.",
      "footer.terms": "Điều khoản & Điều kiện",
      "footer.privacy": "Chính sách quyền riêng tư",
      "footer.flyer": "Tờ giới thiệu cho nhân viên",
      "validation.required": "Vui lòng điền mục này.",
      "validation.phone": "Vui lòng nhập số điện thoại hợp lệ.",
      "validation.consent": "Vui lòng đồng ý trước khi gửi.",
      "status.submitting": "Đang gửi yêu cầu...",
      "status.success": "Cảm ơn bạn. Yêu cầu đã được gửi đến Nhân sự AB Corp. Họ sẽ liên hệ bằng thông tin bạn đã cung cấp.",
      "status.error": "Không thể gửi yêu cầu. Vui lòng thử lại hoặc liên hệ trực tiếp với Nhân sự AB Corp.",
      "status.setup": "Trang đã sẵn sàng nhưng chưa kết nối Google Sheet. Hãy dán URL Web App của Apps Script đã triển khai vào config.js trước khi xuất bản."
    }
  };

  const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
  const form = document.getElementById("paycard-interest-form");
  const preferredLanguageSelect = document.getElementById("preferred-language");
  const statusBox = document.getElementById("form-status");
  const submitButton = form?.querySelector("button[type='submit']");
  const submitLabel = submitButton?.querySelector(".submit-label");
  const originalSubmitTextKey = "form.submit";
  let currentLanguage = "en";
  let languageWasSelectedByUser = false;

  function safeStorageGet(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }

  function safeStorageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* Storage may be unavailable in private or embedded contexts. */ }
  }

  function getInitialLanguage() {
    const configured = window.ABCORP_PAYCARD_CONFIG?.defaultLanguage;
    const saved = safeStorageGet("abcorp-paycard-language");

    if (saved === "en" || saved === "vi") return saved;
    if (configured === "en" || configured === "vi") return configured;
    return navigator.language?.toLowerCase().startsWith("vi") ? "vi" : "en";
  }

  function t(key) {
    return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
  }

  function applyLanguage(language, savePreference = true) {
    if (!translations[language]) language = "en";
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = translations[language]["meta.title"];

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) metaDescription.content = translations[language]["meta.description"];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = translations[language][key];
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.dataset.i18nHtml;
      const value = translations[language][key];
      if (typeof value === "string") element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const value = translations[language][key];
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (preferredLanguageSelect && !languageWasSelectedByUser) {
      preferredLanguageSelect.value = language === "vi" ? "Vietnamese" : "English";
    }

    if (submitLabel && !submitButton?.classList.contains("is-loading")) {
      submitLabel.textContent = t(originalSubmitTextKey);
    }

    if (savePreference) safeStorageSet("abcorp-paycard-language", language);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  preferredLanguageSelect?.addEventListener("change", () => {
    languageWasSelectedByUser = true;
  });

  document.querySelectorAll("[data-accordion] button[aria-controls]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const willOpen = button.getAttribute("aria-expanded") !== "true";

      document.querySelectorAll("[data-accordion] button[aria-controls]").forEach((otherButton) => {
        if (otherButton === button) return;
        const otherPanel = document.getElementById(otherButton.getAttribute("aria-controls"));
        otherButton.setAttribute("aria-expanded", "false");
        if (otherPanel) otherPanel.hidden = true;
      });

      button.setAttribute("aria-expanded", String(willOpen));
      if (panel) panel.hidden = !willOpen;
    });
  });

  function setStatus(type, message) {
    if (!statusBox) return;
    statusBox.className = `form-status${type ? ` is-${type}` : ""}`;
    statusBox.textContent = message || "";
  }

  function clearFieldErrors() {
    form?.querySelectorAll("[aria-invalid='true']").forEach((field) => field.removeAttribute("aria-invalid"));
    form?.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
  }

  function showFieldError(field, message) {
    field.setAttribute("aria-invalid", "true");
    const error = form?.querySelector(`[data-error-for='${field.id}']`);
    if (error) error.textContent = message;
  }

  function validateForm() {
    clearFieldErrors();
    setStatus("", "");
    let valid = true;
    let firstInvalid = null;

    form?.querySelectorAll("input[required], select[required]").forEach((field) => {
      const isCheckbox = field.type === "checkbox";
      const isEmpty = isCheckbox ? !field.checked : !String(field.value).trim();

      if (isEmpty) {
        valid = false;
        firstInvalid ??= field;
        showFieldError(field, isCheckbox ? t("validation.consent") : t("validation.required"));
      }
    });

    const phone = document.getElementById("mobile-phone");
    if (phone?.value.trim()) {
      const digitCount = phone.value.replace(/\D/g, "").length;
      if (digitCount < 7 || digitCount > 15) {
        valid = false;
        firstInvalid ??= phone;
        showFieldError(phone, t("validation.phone"));
      }
    }

    firstInvalid?.focus();
    return valid;
  }

  function getTrackingData() {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || ""
    };
  }

  let pendingSubmission = null;

  function setSubmitting(isSubmitting) {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.classList.toggle("is-loading", isSubmitting);
    if (submitLabel) submitLabel.textContent = isSubmitting ? t("status.submitting") : t(originalSubmitTextKey);
  }

  function finishSubmission(success) {
    if (!pendingSubmission) return;
    window.clearTimeout(pendingSubmission.timeoutId);
    pendingSubmission.transientForm?.remove();
    pendingSubmission = null;
    setSubmitting(false);

    if (success) {
      form.reset();
      languageWasSelectedByUser = false;
      if (preferredLanguageSelect) preferredLanguageSelect.value = currentLanguage === "vi" ? "Vietnamese" : "English";
      setStatus("success", t("status.success"));
    } else {
      setStatus("error", t("status.error"));
    }
  }

  window.addEventListener("message", (event) => {
    if (!pendingSubmission || !event.data || event.data.source !== "abcorp-paycard-form") return;

    const googleOrigin = event.origin === "https://script.google.com" ||
      event.origin === "https://script.googleusercontent.com" ||
      event.origin.endsWith(".googleusercontent.com");

    if (!googleOrigin || event.data.requestId !== pendingSubmission.requestId) return;
    finishSubmission(Boolean(event.data.ok));
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm() || pendingSubmission) return;

    const formData = new FormData(form);
    if (String(formData.get("website") || "").trim()) {
      setStatus("success", t("status.success"));
      form.reset();
      return;
    }

    const endpoint = String(window.ABCORP_PAYCARD_CONFIG?.formEndpoint || "").trim();
    if (!endpoint || endpoint.includes("PASTE_GOOGLE_APPS_SCRIPT")) {
      setStatus("info", t("status.setup"));
      return;
    }

    const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      employeeId: String(formData.get("employeeId") || "").trim(),
      mobilePhone: String(formData.get("mobilePhone") || "").trim(),
      preferredLanguage: String(formData.get("preferredLanguage") || "").trim(),
      bestTime: String(formData.get("bestTime") || "").trim(),
      contactConsent: formData.get("contactConsent") === "Yes" ? "Yes" : "No",
      website: "",
      pageLanguage: currentLanguage === "vi" ? "Vietnamese" : "English",
      submittedAtClient: new Date().toISOString(),
      sourceUrl: window.location.href.split("#")[0],
      requestId,
      ...getTrackingData()
    };

    const transientForm = document.createElement("form");
    transientForm.method = "POST";
    transientForm.action = endpoint;
    transientForm.target = "paycard-submit-frame";
    transientForm.style.display = "none";

    Object.entries(payload).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = String(value ?? "");
      transientForm.appendChild(input);
    });

    document.body.appendChild(transientForm);
    setSubmitting(true);
    setStatus("info", t("status.submitting"));

    const timeoutId = window.setTimeout(() => finishSubmission(false), 20000);
    pendingSubmission = { requestId, transientForm, timeoutId };
    transientForm.submit();
  });

  form?.querySelectorAll("input, select").forEach((field) => {
    field.addEventListener("input", () => {
      field.removeAttribute("aria-invalid");
      const error = form.querySelector(`[data-error-for='${field.id}']`);
      if (error) error.textContent = "";
    });
    field.addEventListener("change", () => {
      field.removeAttribute("aria-invalid");
      const error = form.querySelector(`[data-error-for='${field.id}']`);
      if (error) error.textContent = "";
    });
  });

  applyLanguage(getInitialLanguage(), false);
})();
