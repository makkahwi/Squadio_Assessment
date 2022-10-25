
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
          <label>
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
          <label>
            {("Date Range")}
          </label>

          <div className="col">
            <label>
              {("From")}
            </label>

            <input
              type="date"
              name="from"
              placeholder="From"
              value={formData.from}
              onChange={onChange}
              className="form-control"
            />
          </div>

          <div className="col">
            <label>
              {("To")}
            </label>

            <input
              type="date"
              name="to"
              placeholder="To"
              value={formData.to}
              onChange={onChange}
              className="form-control"
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn btn-success my-2 w-100">
          {("Get Data")}
        </button>
      </form>
    </>
  );
}
