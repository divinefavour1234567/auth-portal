
export default function InputField({ label, type = 'text', id }: { label: string, type?: string, id: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all outline-none"
      />
    </div>
  );
}
