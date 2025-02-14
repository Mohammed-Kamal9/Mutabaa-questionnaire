import React from "react";
import "./App.css";

function Container() {
  return (
    <div>
      <div className="container">
        <h1>شارع الملك فيصل</h1>
        <p>
          <strong>الشارقة, أبو شغارة</strong>
        </p>
        <p>
          <strong>الهاتف : </strong>8476 787 50 971+
        </p>
        <p>
          <strong>البريد الإلكتروني : </strong> info@mutabaacentre.com
        </p>
      </div>

      <div className="container">
        <h1 className="survey-title">استبيان رضا العملاء</h1>
        <form>
          {/* السؤال 1 */}
          <div className="survey-question">كيف تقيم جودة الخدمة المقدمة؟</div>
          <div className="rating-options">
            <input
              type="radio"
              id="service-quality-5"
              name="service-quality"
              value="ممتاز"
            />
            <label htmlFor="service-quality-5">ممتاز</label>
            <input
              type="radio"
              id="service-quality-4"
              name="service-quality"
              value="جيد جداً"
            />
            <label htmlFor="service-quality-4">جيد جداً</label>
            <input
              type="radio"
              id="service-quality-3"
              name="service-quality"
              value="جيد"
            />
            <label htmlFor="service-quality-3">جيد</label>
            <input
              type="radio"
              id="service-quality-2"
              name="service-quality"
              value="متوسط"
            />
            <label htmlFor="service-quality-2">متوسط</label>
            <input
              type="radio"
              id="service-quality-1"
              name="service-quality"
              value="سيئ"
            />
            <label htmlFor="service-quality-1">سيئ</label>
          </div>

          {/* السؤال 2 */}
          <div className="survey-question">
            ما مدى سهولة الوصول إلى الخدمات؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="accessibility-5"
              name="accessibility"
              value="ممتاز"
            />
            <label htmlFor="accessibility-5">ممتاز</label>
            <input
              type="radio"
              id="accessibility-4"
              name="accessibility"
              value="جيد جداً"
            />
            <label htmlFor="accessibility-4">جيد جداً</label>
            <input
              type="radio"
              id="accessibility-3"
              name="accessibility"
              value="جيد"
            />
            <label htmlFor="accessibility-3">جيد</label>
            <input
              type="radio"
              id="accessibility-2"
              name="accessibility"
              value="متوسط"
            />
            <label htmlFor="accessibility-2">متوسط</label>
            <input
              type="radio"
              id="accessibility-1"
              name="accessibility"
              value="سيئ"
            />
            <label htmlFor="accessibility-1">سيئ</label>
          </div>

          {/* السؤال 3 */}
          <div className="survey-question">
            ما مدى رضاك عن سرعة الاستجابة للاستفسارات؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="response-speed-5"
              name="response-speed"
              value="ممتاز"
            />
            <label htmlFor="response-speed-5">ممتاز</label>
            <input
              type="radio"
              id="response-speed-4"
              name="response-speed"
              value="جيد جداً"
            />
            <label htmlFor="response-speed-4">جيد جداً</label>
            <input
              type="radio"
              id="response-speed-3"
              name="response-speed"
              value="جيد"
            />
            <label htmlFor="response-speed-3">جيد</label>
            <input
              type="radio"
              id="response-speed-2"
              name="response-speed"
              value="متوسط"
            />
            <label htmlFor="response-speed-2">متوسط</label>
            <input
              type="radio"
              id="response-speed-1"
              name="response-speed"
              value="سيئ"
            />
            <label htmlFor="response-speed-1">سيئ</label>
          </div>

          {/* السؤال 4 */}
          <div className="survey-question">
            ما مدى رضاك عن تنوع الخدمات المقدمة في المركز؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="service-variety-5"
              name="service-variety"
              value="ممتاز"
            />
            <label htmlFor="service-variety-5">ممتاز</label>
            <input
              type="radio"
              id="service-variety-4"
              name="service-variety"
              value="جيد جداً"
            />
            <label htmlFor="service-variety-4">جيد جداً</label>
            <input
              type="radio"
              id="service-variety-3"
              name="service-variety"
              value="جيد"
            />
            <label htmlFor="service-variety-3">جيد</label>
            <input
              type="radio"
              id="service-variety-2"
              name="service-variety"
              value="متوسط"
            />
            <label htmlFor="service-variety-2">متوسط</label>
            <input
              type="radio"
              id="service-variety-1"
              name="service-variety"
              value="سيئ"
            />
            <label htmlFor="service-variety-1">سيئ</label>
          </div>

          {/* السؤال 5 */}
          <div className="survey-question">
            هل توفر المركز المعلومات الكافية عن الخدمات؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="info-availability-5"
              name="info-availability"
              value="ممتاز"
            />
            <label htmlFor="info-availability-5">ممتاز</label>
            <input
              type="radio"
              id="info-availability-4"
              name="info-availability"
              value="جيد جداً"
            />
            <label htmlFor="info-availability-4">جيد جداً</label>
            <input
              type="radio"
              id="info-availability-3"
              name="info-availability"
              value="جيد"
            />
            <label htmlFor="info-availability-3">جيد</label>
            <input
              type="radio"
              id="info-availability-2"
              name="info-availability"
              value="متوسط"
            />
            <label htmlFor="info-availability-2">متوسط</label>
            <input
              type="radio"
              id="info-availability-1"
              name="info-availability"
              value="سيئ"
            />
            <label htmlFor="info-availability-1">سيئ</label>
          </div>

          {/* السؤال 6 */}
          <div className="survey-question">ما مدى رضاك عن تعامل الموظفين؟</div>
          <div className="rating-options">
            <input
              type="radio"
              id="staff-interaction-5"
              name="staff-interaction"
              value="ممتاز"
            />
            <label htmlFor="staff-interaction-5">ممتاز</label>
            <input
              type="radio"
              id="staff-interaction-4"
              name="staff-interaction"
              value="جيد جداً"
            />
            <label htmlFor="staff-interaction-4">جيد جداً</label>
            <input
              type="radio"
              id="staff-interaction-3"
              name="staff-interaction"
              value="جيد"
            />
            <label htmlFor="staff-interaction-3">جيد</label>
            <input
              type="radio"
              id="staff-interaction-2"
              name="staff-interaction"
              value="متوسط"
            />
            <label htmlFor="staff-interaction-2">متوسط</label>
            <input
              type="radio"
              id="staff-interaction-1"
              name="staff-interaction"
              value="سيئ"
            />
            <label htmlFor="staff-interaction-1">سيئ</label>
          </div>

          {/* السؤال 7 */}
          <div className="survey-question">
            هل تشعر أن الموظفين متعاونون ويقدمون الدعم الكافي؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="staff-support-5"
              name="staff-support"
              value="ممتاز"
            />
            <label htmlFor="staff-support-5">ممتاز</label>
            <input
              type="radio"
              id="staff-support-4"
              name="staff-support"
              value="جيد جداً"
            />
            <label htmlFor="staff-support-4">جيد جداً</label>
            <input
              type="radio"
              id="staff-support-3"
              name="staff-support"
              value="جيد"
            />
            <label htmlFor="staff-support-3">جيد</label>
            <input
              type="radio"
              id="staff-support-2"
              name="staff-support"
              value="متوسط"
            />
            <label htmlFor="staff-support-2">متوسط</label>
            <input
              type="radio"
              id="staff-support-1"
              name="staff-support"
              value="سيئ"
            />
            <label htmlFor="staff-support-1">سيئ</label>
          </div>

          {/* السؤال 8 */}
          <div className="survey-question">ما مدى رضاك عن أوقات الانتظار؟</div>
          <div className="rating-options">
            <input
              type="radio"
              id="waiting-time-5"
              name="waiting-time"
              value="ممتاز"
            />
            <label htmlFor="waiting-time-5">ممتاز</label>
            <input
              type="radio"
              id="waiting-time-4"
              name="waiting-time"
              value="جيد جداً"
            />
            <label htmlFor="waiting-time-4">جيد جداً</label>
            <input
              type="radio"
              id="waiting-time-3"
              name="waiting-time"
              value="جيد"
            />
            <label htmlFor="waiting-time-3">جيد</label>
            <input
              type="radio"
              id="waiting-time-2"
              name="waiting-time"
              value="متوسط"
            />
            <label htmlFor="waiting-time-2">متوسط</label>
            <input
              type="radio"
              id="waiting-time-1"
              name="waiting-time"
              value="سيئ"
            />
            <label htmlFor="waiting-time-1">سيئ</label>
          </div>

          {/* السؤال 9 */}
          <div className="survey-question">ما مدى رضاك عن أسعار الخدمات؟</div>
          <div className="rating-options">
            <input
              type="radio"
              id="pricing-satisfaction-5"
              name="pricing-satisfaction"
              value="ممتاز"
            />
            <label htmlFor="pricing-satisfaction-5">ممتاز</label>
            <input
              type="radio"
              id="pricing-satisfaction-4"
              name="pricing-satisfaction"
              value="جيد جداً"
            />
            <label htmlFor="pricing-satisfaction-4">جيد جداً</label>
            <input
              type="radio"
              id="pricing-satisfaction-3"
              name="pricing-satisfaction"
              value="جيد"
            />
            <label htmlFor="pricing-satisfaction-3">جيد</label>
            <input
              type="radio"
              id="pricing-satisfaction-2"
              name="pricing-satisfaction"
              value="متوسط"
            />
            <label htmlFor="pricing-satisfaction-2">متوسط</label>
            <input
              type="radio"
              id="pricing-satisfaction-1"
              name="pricing-satisfaction"
              value="سيئ"
            />
            <label htmlFor="pricing-satisfaction-1">سيئ</label>
          </div>

          {/* السؤال 10 */}
          <div className="survey-question">
            هل توفر المركز خيارات دفع متنوعة؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="payment-options-5"
              name="payment-options"
              value="ممتاز"
            />
            <label htmlFor="payment-options-5">ممتاز</label>
            <input
              type="radio"
              id="payment-options-4"
              name="payment-options"
              value="جيد جداً"
            />
            <label htmlFor="payment-options-4">جيد جداً</label>
            <input
              type="radio"
              id="payment-options-3"
              name="payment-options"
              value="جيد"
            />
            <label htmlFor="payment-options-3">جيد</label>
            <input
              type="radio"
              id="payment-options-2"
              name="payment-options"
              value="متوسط"
            />
            <label htmlFor="payment-options-2">متوسط</label>
            <input
              type="radio"
              id="payment-options-1"
              name="payment-options"
              value="سيئ"
            />
            <label htmlFor="payment-options-1">سيئ</label>
          </div>

          {/* السؤال 11 */}
          <div className="survey-question">
            ما مدى رضاك عن وسائل التواصل مع المركز؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="communication-5"
              name="communication"
              value="ممتاز"
            />
            <label htmlFor="communication-5">ممتاز</label>
            <input
              type="radio"
              id="communication-4"
              name="communication"
              value="جيد جداً"
            />
            <label htmlFor="communication-4">جيد جداً</label>
            <input
              type="radio"
              id="communication-3"
              name="communication"
              value="جيد"
            />
            <label htmlFor="communication-3">جيد</label>
            <input
              type="radio"
              id="communication-2"
              name="communication"
              value="متوسط"
            />
            <label htmlFor="communication-2">متوسط</label>
            <input
              type="radio"
              id="communication-1"
              name="communication"
              value="سيئ"
            />
            <label htmlFor="communication-1">سيئ</label>
          </div>

          {/* السؤال 12 */}
          <div className="survey-question">
            كيف تقيم المرافق المتاحة في المركز؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="facilities-5"
              name="facilities"
              value="ممتاز"
            />
            <label htmlFor="facilities-5">ممتاز</label>
            <input
              type="radio"
              id="facilities-4"
              name="facilities"
              value="جيد جداً"
            />
            <label htmlFor="facilities-4">جيد جداً</label>
            <input
              type="radio"
              id="facilities-3"
              name="facilities"
              value="جيد"
            />
            <label htmlFor="facilities-3">جيد</label>
            <input
              type="radio"
              id="facilities-2"
              name="facilities"
              value="متوسط"
            />
            <label htmlFor="facilities-2">متوسط</label>
            <input
              type="radio"
              id="facilities-1"
              name="facilities"
              value="سيئ"
            />
            <label htmlFor="facilities-1">سيئ</label>
          </div>

          {/* السؤال 13 */}
          <div className="survey-question">كيف تقيم نظافة وترتيب المركز؟</div>
          <div className="rating-options">
            <input
              type="radio"
              id="cleanliness-5"
              name="cleanliness"
              value="ممتاز"
            />
            <label htmlFor="cleanliness-5">ممتاز</label>
            <input
              type="radio"
              id="cleanliness-4"
              name="cleanliness"
              value="جيد جداً"
            />
            <label htmlFor="cleanliness-4">جيد جداً</label>
            <input
              type="radio"
              id="cleanliness-3"
              name="cleanliness"
              value="جيد"
            />
            <label htmlFor="cleanliness-3">جيد</label>
            <input
              type="radio"
              id="cleanliness-2"
              name="cleanliness"
              value="متوسط"
            />
            <label htmlFor="cleanliness-2">متوسط</label>
            <input
              type="radio"
              id="cleanliness-1"
              name="cleanliness"
              value="سيئ"
            />
            <label htmlFor="cleanliness-1">سيئ</label>
          </div>

          {/* السؤال 14 */}
          <div className="survey-question">
            كيف تقيم تجربتك بشكل عام في المركز؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="overall-experience-5"
              name="overall-experience"
              value="ممتاز"
            />
            <label htmlFor="overall-experience-5">ممتاز</label>
            <input
              type="radio"
              id="overall-experience-4"
              name="overall-experience"
              value="جيد جداً"
            />
            <label htmlFor="overall-experience-4">جيد جداً</label>
            <input
              type="radio"
              id="overall-experience-3"
              name="overall-experience"
              value="جيد"
            />
            <label htmlFor="overall-experience-3">جيد</label>
            <input
              type="radio"
              id="overall-experience-2"
              name="overall-experience"
              value="متوسط"
            />
            <label htmlFor="overall-experience-2">متوسط</label>
            <input
              type="radio"
              id="overall-experience-1"
              name="overall-experience"
              value="سيئ"
            />
            <label htmlFor="overall-experience-1">سيئ</label>
          </div>

          {/* السؤال 15 */}
          <div className="survey-question">
            هل تنصح الآخرين بالتعامل مع هذا المركز؟
          </div>
          <div className="rating-options">
            <input
              type="radio"
              id="recommendation-5"
              name="recommendation"
              value="ممتاز"
            />
            <label htmlFor="recommendation-5">ممتاز</label>
            <input
              type="radio"
              id="recommendation-4"
              name="recommendation"
              value="جيد جداً"
            />
            <label htmlFor="recommendation-4">جيد جداً</label>
            <input
              type="radio"
              id="recommendation-3"
              name="recommendation"
              value="جيد"
            />
            <label htmlFor="recommendation-3">جيد</label>
            <input
              type="radio"
              id="recommendation-2"
              name="recommendation"
              value="متوسط"
            />
            <label htmlFor="recommendation-2">متوسط</label>
            <input
              type="radio"
              id="recommendation-1"
              name="recommendation"
              value="سيئ"
            />
            <label htmlFor="recommendation-1">سيئ</label>
          </div>

          {/* ملاحظات إضافية */}
          <label htmlFor="additional-feedback" className="survey-question">
            ملاحظات إضافية:
          </label>
          <textarea
            id="additional-feedback"
            className="feedback-textarea"
            placeholder="اكتب ملاحظاتك هنا..."
          ></textarea>

          <button type="submit" className="submit-button">
            إرسال التقييم
          </button>
        </form>
      </div>

      {/* قسم أوقات الدوام */}
      <div className="container">
        <h1>أوقات الدوام</h1>
        <div className="day">السبت:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الأحد:</div>
        <p className="time closed">مغلق</p>
        <div className="day">الإثنين:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الثلاثاء:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الأربعاء:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الخميس:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الجمعة:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
      </div>

      <div className="cta-section">
        <a
          href="https://mutabaacentre.com/contact.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-button">تواصل معنا</button>
        </a>
      </div>
    </div>
  );
}

export default Container;
