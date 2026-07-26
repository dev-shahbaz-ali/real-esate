import React from 'react';
import { FiX } from 'react-icons/fi';

export default function ActionModal({ open, title, description, fields = [], onClose, onSubmit }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/25 p-4" role="dialog" aria-modal="true">
      <form onSubmit={(event) => { event.preventDefault(); onSubmit(); }} className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div><h2 className="text-xl font-bold text-slate-900">{title}</h2><p className="mt-1 text-sm text-slate-500">{description}</p></div>
          <button type="button" aria-label="Close form" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><FiX /></button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((field) => <label key={field.label} className={`text-sm font-medium text-slate-700 ${field.full ? 'sm:col-span-2' : ''}`}>
            {field.label}
            {field.type === 'select' ? <select required={field.required !== false} defaultValue="" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none"><option value="" disabled>Select {field.label.toLowerCase()}</option>{field.options.map((option) => <option key={option}>{option}</option>)}</select> : <input required={field.required !== false} type={field.type || 'text'} placeholder={field.placeholder} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none" />}
          </label>)}
        </div>
        <div className="mt-7 flex justify-end gap-3"><button type="button" onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">Cancel</button><button className="rounded-lg bg-[#3568d4] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Save changes</button></div>
      </form>
    </div>
  );
}
