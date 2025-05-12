@@ .. @@
         <div className="max-w-3xl mx-auto text-center mb-16">
           {withAnimation ? (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="inline-block mb-4"
             >
               <Badge variant="primary" size="lg">WHY VAN BORG</Badge>
             </motion.div>
           ) : (
             <div className="inline-block mb-4">
               <Badge variant="primary" size="lg">WHY VAN BORG</Badge>
             </div>
           )}
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
-            className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title relative inline-block"
+            className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
           >
-            <span className="absolute -top-2 -left-4 -right-4 -bottom-1 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-sm -z-10"></span>
             {title}
           </motion.h2>
           <motion.p