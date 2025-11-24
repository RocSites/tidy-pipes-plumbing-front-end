const coupons = [
  {
    amount: "$50 OFF",
    title: "Any Service",
    subtitle: "New Customer",
    code: "TIDY50",
    details: "Can combine with other offers. One time use. Valid through 2025.",
  },
  {
    amount: "$80 OFF",
    title: "Sump Pump",
    subtitle: "Replacement",
    code: "TIDY80",
    details: "Can combine with other offers. One time use. Valid through 2025.",
  },
  {
    amount: "$120 OFF",
    title: "Water Heater",
    subtitle: "Install",
    code: "TIDY120",
    details: "Can combine with other offers. One time use. Valid through 2025.",
  },
]

export function Coupons() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-primary font-semibold mb-2">Save More</p>
          <h2 className="text-3xl font-bold text-balance">Plumbing Coupons for Rochester Homeowners</h2>
          <p className="text-muted-foreground mt-4">
            Mention the code when you call to schedule and redeem any offer below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coupons.map((coupon) => (
            <div
              key={coupon.code}
              className="bg-background border-2 border-dashed border-primary rounded-2xl shadow-lg p-8 text-center flex flex-col"
            >
              <div className="text-4xl font-extrabold text-primary mb-4">{coupon.amount}</div>
              <div className="text-xl font-semibold uppercase tracking-wide">{coupon.title}</div>
              <div className="text-lg uppercase tracking-wide text-muted-foreground mb-4">{coupon.subtitle}</div>
              <div className="bg-muted rounded-lg px-4 py-3 mb-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Mention</p>
                <p className="text-2xl font-bold">{coupon.code}</p>
                <p className="text-sm text-muted-foreground">when calling to schedule</p>
              </div>
              <p className="text-xs text-primary uppercase tracking-wide">{coupon.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
