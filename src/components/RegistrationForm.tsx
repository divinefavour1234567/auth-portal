import InputField from './InputField';

export default function RegistrationForm({ onSwitch }: { onSwitch: () => void }) {
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Create an account</h2>
      <form className="space-y-6">
        <InputField label="Full Name" id="name" />
        <InputField label="Email Address" type="email" id="email" />
        <InputField label="Password" type="password" id="password" />
        <InputField label="Referral Name" id="referral" />
        
        <div className="flex items-center gap-3 py-2">
          <input type="checkbox" id="admin" className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
          <label htmlFor="admin" className="text-sm font-medium text-slate-700">Designate as Administrator</label>
        </div>

        <button type="submit" className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">Register</button>
      </form>
      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <button onClick={onSwitch} className="text-slate-900 font-semibold hover:underline">Log in</button>
      </p>
    </div>
  );
}
