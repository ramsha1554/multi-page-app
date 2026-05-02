# mobile issues

I opened the app on my phone to see how it looks. The navbar is completely messed up. 

- On desktop, the navbar looks fine because it has a lot of horizontal space. But on my phone, the links are squished against the "Internship App" title.
- If I shrink the screen more, the links wrap onto a second line, and it pushes the navbar height down. It looks very unprofessional and broken.
- The contact form fields also feel a bit narrow on mobile. I should make sure they take up the full width of the screen.

Tomorrow I need to learn how Tailwind responsive breakpoints work. I think I can use `md:` prefix to make the navbar layout flex-row on desktop but flex-col (vertical stack) on mobile. Let's see if that works.
