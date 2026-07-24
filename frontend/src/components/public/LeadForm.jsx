import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2, DollarSign, Mail, User, MessageSquare } from 'lucide-react';
import { useLeads } from '../../hooks/useLeads';

const LeadForm = () => {
  const { submitLead, isSubmitting } = useLeads();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    // Sanitization & trim
    const formattedPayload = {
      name: data.name.trim(),
      email: data.email.trim(),
      budget: Number(data.budget),
      message: data.message.trim(),
    };

    const res = await submitLead(formattedPayload);
    if (res?.success) {
      reset();
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Accelerate Your <span className="gradient-text">Lead Pipeline?</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
            Fill out the form below. Our team will review your inquiry and get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name Field */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="John Doe"
                    {...register('name', {
                      required: 'Full name is required',
                      validate: (val) => val.trim() !== '' || 'Full name cannot be blank',
                    })}
                    className={`w-full pl-11 pr-4 py-3 bg-slate-900/90 border rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-rose-400 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    disabled={isSubmitting}
                    placeholder="john@company.com"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    className={`w-full pl-11 pr-4 py-3 bg-slate-900/90 border rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500/20'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-400 font-medium">{errors.email.message}</p>
                )}
              </div>

            </div>

            {/* Budget Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Estimated Project Budget (USD) <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <DollarSign className="w-5 h-5" />
                </div>
                <input
                  type="number"
                  disabled={isSubmitting}
                  min="0"
                  step="any"
                  placeholder="5000"
                  {...register('budget', {
                    required: 'Budget amount is required',
                    min: {
                      value: 0,
                      message: 'Budget cannot be negative',
                    },
                    valueAsNumber: true,
                  })}
                  className={`w-full pl-11 pr-4 py-3 bg-slate-900/90 border rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.budget
                      ? 'border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.budget && (
                <p className="text-xs text-rose-400 font-medium">{errors.budget.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Project Requirements / Message <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 text-slate-500 pointer-events-none">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  rows={4}
                  disabled={isSubmitting}
                  placeholder="Tell us about your project goals, timelines, and expected deliverables..."
                  {...register('message', {
                    required: 'Message is required',
                    validate: (val) => val.trim() !== '' || 'Message cannot be empty whitespace',
                  })}
                  className={`w-full pl-11 pr-4 py-3 bg-slate-900/90 border rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-xs text-rose-400 font-medium">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl gradient-bg hover:opacity-90 active:scale-[0.99] text-white font-semibold text-base shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Lead Inquiry</span>
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              🔒 We respect your privacy. No spam guaranteed.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default LeadForm;
