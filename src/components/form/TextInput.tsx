type TextInputProps = {
  label: string
  name: string
  type?: string
  value: string
  onChange: (value: string) => void
}

export default function TextInput({ label, name, type = 'text', value, onChange }: TextInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </div>
  )
}
