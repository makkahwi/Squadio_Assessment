
export default function InputForm({ formData, loading, onChange, onSubmit }) {
  const intervalOptions = [
    { value: "1d", label: "1 Day" },
    { value: "1wk", label: "1 Week" },
    { value: "1mo", label: "1 Month" },
  ];

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group my-2">
          <label className="my-3">
            {("Interval")}
          </label>

          <select
            name="interval"
            placeholder="Interval"
            value={formData.interval}
            onChange={onChange}
            className="form-control"
          >
            {intervalOptions.map(({ value, label }, i) => (
              <option key={i} value={value} label={label} />
            ))}
          </select>
        </div>

        <div className="row my-2">
          <label className="my-3">
            {("Date Range")}
          </label>

          <div className="input-group">
            <input
              type="date"
              max={new Date().toLocaleDateString("en-CA")}
              name="from"
              placeholder="From"
              value={formData.from}
              onChange={onChange}
              className="form-control"
            />

            <input
              type="date"
              max={new Date().toLocaleDateString("en-CA")}
              name="to"
              placeholder="To"
              value={formData.to}
              onChange={onChange}
              className="form-control"
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn btn-success my-3 w-100">
          {("Get Data")}
        </button>
      </form>
    </>
  );
}
