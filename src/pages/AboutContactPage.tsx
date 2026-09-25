import React, { useState } from 'react';
import { Mail, GraduationCap, Send, CheckCircle, Heart, Users, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutContactPageProps {
  currentLang: Language;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const a = t.about;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState<string>('general');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Title & Vision */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE5D6] text-[#8A3D2B] text-xs font-mono font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{a.projectBadge}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 leading-tight">
          {a.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {a.subtitle}
        </p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#E6DDCE] shadow-xs space-y-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            {a.storyTitle}
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            {a.storyP1}
          </p>
          <p className="text-sm text-stone-700 leading-relaxed">
            {a.storyP2}
          </p>

          <div className="pt-4 border-t border-[#F0EAE0] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#8A3D2B] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-stone-900">Bảo tồn sống</h4>
                <p className="text-[11px] text-stone-600 mt-1">
                  Đưa di sản thành sản phẩm phong cách sống có thể chạm, dùng và tự hào mỗi ngày.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] flex items-start gap-3">
              <Users className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-stone-900">Tôn trọng nghệ nhân</h4>
                <p className="text-[11px] text-stone-600 mt-1">
                  Ghi nhận và định danh trung thực công sức của phụ nữ H’Mông, Thái, Dao và làng lụa.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Transparency Note */}
          <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            🎓 <span className="font-semibold">Thông cáo dự án sinh viên:</span> {a.projectDisclaimer}
          </div>
        </div>

        {/* Contact & Feedback Form */}
        <div className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-2xl border border-[#E6DDCE] shadow-md space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A3D2B] font-semibold">
              Đóng Góp Ý Kiến
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
              {a.contactTitle}
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              {a.contactSubtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-stone-800 block mb-1">
                {a.form.name}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nguyễn Văn A"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D5C9B8] text-xs text-stone-900 focus:outline-hidden focus:border-[#8A3D2B]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-800 block mb-1">
                {a.form.email}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D5C9B8] text-xs text-stone-900 focus:outline-hidden focus:border-[#8A3D2B]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-800 block mb-1">
                {a.form.topic}
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D5C9B8] text-xs text-stone-900 focus:outline-hidden focus:border-[#8A3D2B]"
              >
                <option value="general">{a.form.topics.general}</option>
                <option value="custom_inquiry">{a.form.topics.custom_inquiry}</option>
                <option value="cultural_exchange">{a.form.topics.cultural_exchange}</option>
                <option value="student_feedback">{a.form.topics.student_feedback}</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-800 block mb-1">
                {a.form.message}
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={a.form.message}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D5C9B8] text-xs text-stone-900 focus:outline-hidden focus:border-[#8A3D2B]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-5 bg-[#8A3D2B] hover:bg-[#723223] text-white rounded-lg text-xs font-semibold transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? a.form.sending : a.form.sendBtn}</span>
            </button>

            {submitSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{a.form.sentSuccess}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
