  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map((feature, index) => (
      <div
        key={index}
        className="group relative p-6 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border hover:border-light-brand-primary dark:hover:border-dark-brand-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-light-brand-primary/10 dark:hover:shadow-dark-brand-primary/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-light-brand-primary/5 to-light-brand-secondary/5 dark:from-dark-brand-primary/5 dark:to-dark-brand-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <div className="w-12 h-12 rounded-lg bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-light-brand-primary/20 dark:group-hover:bg-dark-brand-primary/20 transition-colors duration-300">
            {feature.icon}
          </div>
          <h3 className="text-xl font-title font-semibold mb-2 text-light-text-primary dark:text-white group-hover:text-light-brand-primary dark:group-hover:text-dark-brand-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-text-primary dark:group-hover:text-dark-text-primary transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div> 