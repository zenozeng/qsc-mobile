;; 导出目录内所有png文件到子文件夹output，并resize到500*500
;; mkdir resize
;; gimp -i -b '(batch-resize "*.png")' -b '(gimp-quit 0)'

(define (batch-resize pattern )
  (let* ((filelist (cadr (file-glob pattern 1))))
    (while (not (null? filelist))
           (let* ((filename (car filelist))
		  (output (string-append (string-append "resize/" filename) ".png"))
                  (image (car (gimp-file-load RUN-NONINTERACTIVE
                                              filename filename)))
                  (drawable (car (gimp-image-flatten image))))

	     (gimp-image-scale image 500 500)

	     (file-jpeg-save RUN-NONINTERACTIVE
			     image drawable output output 1 0 1 0 "Created with Gimp" 0 1 0 0)
             (gimp-image-delete image))
           (set! filelist (cdr filelist)))))
