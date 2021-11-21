FROM docker.io/denoland/deno:alpine
EXPOSE 8080
WORKDIR /app
USER deno
COPY deps.ts .
RUN deno cache deps.ts
ADD . .
RUN deno cache app.ts
CMD ["run", "--allow-net", "app.ts"]
