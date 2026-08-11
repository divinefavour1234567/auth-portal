import InputField from './InputField';

export default function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Welcome back</h2>
      <form className="space-y-6">
        <InputField label="Email Address" type="email" id="email" />
        <InputField label="Password" type="password" id="password" />
        <button type="submit" className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">Login</button>
      </form>
      <p className="mt-8 text-center text-sm text-slate-500">
        New here?{' '}
        <button onClick={onSwitch} className="text-slate-900 font-semibold hover:underline">Create an account</button>
      </p>
    </div>
  );
}
